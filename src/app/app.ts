import {Nes} from '../nes/nes.ts'
import {PadBit} from '../nes/apu.ts'

import {AppEvent} from './app_event.ts'
import {AudioManager} from './audio_manager.ts'
import {PadKeyHandler} from './pad_key_handler.ts'
import {ScreenWnd, PaletWnd, NameTableWnd, PatternTableWnd,
        RegisterWnd, TraceWnd, ControlWnd} from './ui.ts'

import WindowManager from '../wnd/window_manager.ts'

import * as Rx from 'rxjs/Rx'

const CPU_HZ = 1789773
const MAX_ELAPSED_TIME = 1000 / 15

function clamp(x, min, max) {
  if (x < min)
    return min
  if (max < min)
    max = min
  if (x > max)
    return max
  return x
}

export class App {
  private destroying = false
  private nes: Nes
  private padKeyHandler: PadKeyHandler
  private audioManager: AudioManager
  private stream: AppEvent.Stream
  private subscription: Rx.Subscription

  private screenWnd: ScreenWnd
  private hasPaletWnd: boolean
  private hasNameTableWnd: boolean
  private hasPatternTableWnd: boolean

  private hasRegisterWnd: boolean
  private hasTraceWnd: boolean
  private hasCtrlWnd: boolean

  public static create(wndMgr: WindowManager, option: any): App {
    return new App(wndMgr, option)
  }

  constructor(private wndMgr: WindowManager, option: any) {
    this.nes = Nes.create()
    window.nes = this.nes  // Put nes into global.
    this.nes.setVblankCallback((leftCycles) => { this.onVblank(leftCycles) })
    this.nes.setBreakPointCallback(() => { this.onBreakPoint() })

    this.audioManager = new AudioManager()
    this.stream = new AppEvent.Stream()

    this.subscription = this.stream
      .subscribe(event => {
        switch (event.type) {
        case AppEvent.Type.DESTROY:
          this.cleanUp()
          break
        case AppEvent.Type.RENDER:
          break
        case AppEvent.Type.RUN:
          this.nes.cpu.pause(false)
          break
        case AppEvent.Type.PAUSE:
          this.nes.cpu.pause(true)
          break
        case AppEvent.Type.STEP:
          this.nes.step()
          break
        case AppEvent.Type.RESET:
          this.nes.reset()
          break
        case AppEvent.Type.MUTE:
          {
            const volume = event.value ? 0.0 : 1.0
            this.audioManager.setMasterVolume(volume)
          }
          break
        }
      })

    this.screenWnd = new ScreenWnd(this.wndMgr, this, this.nes, this.stream)
    this.wndMgr.add(this.screenWnd)
    if (option.title)
      this.screenWnd.setTitle(option.title as string)

    const size = this.screenWnd.getWindowSize()
    let x = clamp((option.centerX || 0) - size.width / 2, 0, window.innerWidth - size.width - 1)
    let y = clamp((option.centerY || 0) - size.height / 2, 0, window.innerHeight - size.height - 1)
    this.screenWnd.setPos(x, y)

    this.nes.cpu.pause(true)
    this.nes.reset()

    this.padKeyHandler = new PadKeyHandler()
    this.setUpKeyEvent(this.screenWnd.getCanvas(), this.padKeyHandler)

    this.startLoopAnimation()
  }

  public loadRom(romData: Uint8Array): boolean {
    if (!this.nes.setRomData(romData)) {
      alert(`Illegal ROM format`)
      return false
    }
    this.nes.reset()
    this.nes.cpu.pause(false)
    this.screenWnd.setFocus()
    this.stream.triggerLoadRom()
    return true
  }

  public createPaletWnd(): boolean {
    if (this.hasPaletWnd)
      return false
    const paletWnd = new PaletWnd(this.wndMgr, this.nes, this.stream)
    this.wndMgr.add(paletWnd)
    paletWnd.setPos(520, 0)
    paletWnd.setCallback(action => {
      if (action === 'close') {
        this.hasPaletWnd = false
      }
    })
    return this.hasPaletWnd = true
  }

  public createNameTableWnd(): boolean {
    if (this.hasNameTableWnd)
      return false
    const nameTableWnd = new NameTableWnd(this.wndMgr, this.nes, this.stream)
    this.wndMgr.add(nameTableWnd)
    nameTableWnd.setPos(520, 40)
    nameTableWnd.setCallback(action => {
      if (action === 'close') {
        this.hasNameTableWnd = false
      }
    })
    return this.hasNameTableWnd = true
  }

  public createPatternTableWnd(): boolean {
    if (this.hasPatternTableWnd)
      return false
    const patternTableWnd = new PatternTableWnd(this.wndMgr, this.nes, this.stream)
    this.wndMgr.add(patternTableWnd)
    patternTableWnd.setPos(520, 300)
    patternTableWnd.setCallback(action => {
      if (action === 'close') {
        this.hasPatternTableWnd = false
      }
    })
    return this.hasPatternTableWnd = true
  }

  public createTraceWnd(): boolean {
    if (this.hasTraceWnd)
      return false
    const traceWnd = new TraceWnd(this.wndMgr, this.nes, this.stream)
    this.wndMgr.add(traceWnd)
    traceWnd.setPos(0, 500)
    traceWnd.setCallback(action => {
      if (action === 'close') {
        this.hasTraceWnd = false
      }
    })

    return this.hasTraceWnd = true
  }

  public createRegisterWnd(): boolean {
    if (this.hasRegisterWnd != null)
      return false
    const registerWnd = new RegisterWnd(this.wndMgr, this.nes, this.stream)
    this.wndMgr.add(registerWnd)
    registerWnd.setPos(410, 500)
    registerWnd.setCallback(action => {
      if (action === 'close') {
        this.hasRegisterWnd = null
      }
    })

    return this.hasRegisterWnd = true
  }

  public createControlWnd(): boolean {
    if (this.hasCtrlWnd != null)
      return false
    const ctrlWnd = new ControlWnd(this.wndMgr, this.stream)
    this.wndMgr.add(ctrlWnd)
    ctrlWnd.setPos(520, 500)
    ctrlWnd.setCallback((action) => {
      if (action === 'close') {
        this.hasCtrlWnd = null
      }
    })

    return this.hasCtrlWnd = true
  }

  private cleanUp() {
    this.destroying = true
    this.audioManager.destroy()

    this.subscription.unsubscribe()

    this.wndMgr = null
  }

  private onVblank(leftCycles: number): void {
    if (leftCycles < 1)
      this.render()

    for (let i = 0; i < AudioManager.CHANNEL; ++i) {
      this.audioManager.setChannelFrequency(i, this.nes.apu.getFrequency(i))
      this.audioManager.setChannelVolume(i, this.nes.apu.getVolume(i))
    }
  }

  private onBreakPoint(): void {
    this.stream.triggerBreakPoint()
  }

  private startLoopAnimation(): void {
    let lastTime = window.performance.now()
    const loopFn = () => {
      if (this.destroying)
        return

      const curTime = window.performance.now()
      const elapsedTime = curTime - lastTime
      lastTime = curTime

      this.loop(elapsedTime)
      requestAnimationFrame(loopFn)
    }
    requestAnimationFrame(loopFn)
  }

  private loop(elapsedTime: number): void {
    if (this.nes.cpu.isPaused())
      return

    const isFocused = this.screenWnd.isFocused()
    for (let i = 0; i < 2; ++i) {
      let pad = this.padKeyHandler.getStatus(i)
      if (isFocused)
        pad |= this.getGamepadStatus(i)
      this.nes.setPadStatus(i, pad)
    }

    const et = Math.min(elapsedTime, MAX_ELAPSED_TIME)
    let cycles = (CPU_HZ * et / 1000) | 0
    this.nes.runCycles(cycles)
  }

  private render(): void {
    this.stream.triggerRender()
  }

  private setUpKeyEvent(root: HTMLElement, padKeyHandler: PadKeyHandler): void {
    root.setAttribute('tabindex', '1')  // To accept key event.
    root.style.outline = 'none'
    root.addEventListener('keydown', (event) => {
      if (event.ctrlKey || event.altKey || event.metaKey)
        return
      event.preventDefault()
      padKeyHandler.onKeyDown(event.keyCode)
    })
    root.addEventListener('keyup', (event) => {
      event.preventDefault()
      padKeyHandler.onKeyUp(event.keyCode)
    })
  }

  private getGamepadStatus(padNo: number): number {
    const THRESHOLD = 0.5

    if (!window.Gamepad)
      return 0
    const gamepads = navigator.getGamepads()
    if (padNo >= gamepads.length)
      return 0

    const gamepad = gamepads[padNo]
    if (!gamepad)
      return 0

    let pad = 0
    if (gamepad.axes[0] < -THRESHOLD)
      pad |= PadBit.L
    if (gamepad.axes[0] > THRESHOLD)
      pad |= PadBit.R
    if (gamepad.axes[1] < -THRESHOLD)
      pad |= PadBit.U
    if (gamepad.axes[1] > THRESHOLD)
      pad |= PadBit.D
    if (gamepad.buttons[0].pressed)
      pad |= PadBit.B
    if (gamepad.buttons[1].pressed)
      pad |= PadBit.A
    if (gamepad.buttons[8].pressed)
      pad |= PadBit.SELECT
    if (gamepad.buttons[9].pressed)
      pad |= PadBit.START
    return pad
  }
}
