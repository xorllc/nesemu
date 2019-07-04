import WindowManager from '../wnd/window_manager'
import Wnd from '../wnd/wnd'

import DomUtil from '../util/dom_util'
import {Nes} from '../nes/nes'
import {Scaler, NearestNeighborScaler, ScanlineScaler, EpxScaler} from '../util/scaler'

import {App} from './app'
import {AppEvent} from './app_event'
import {FpsWnd} from './other_wnd'

import * as Pubsub from '../util/pubsub'

const WIDTH = 256 | 0
const HEIGHT = 240 | 0
const HEDGE = 0 | 0
const VEDGE = 8 | 0

function takeScreenshot(wndMgr: WindowManager, screenWnd: ScreenWnd): Wnd {
  const img = document.createElement('img') as HTMLImageElement
  const title = String(Date.now())
  img.src = screenWnd.capture()
  img.className = 'pixelated full-size'
  img.title = img.alt = title

  const imgWnd = new Wnd(wndMgr, WIDTH, HEIGHT, title)
  imgWnd.setContent(img)
  imgWnd.addResizeBox()
  wndMgr.add(imgWnd)
  return imgWnd
}

function fitAspectRatio(width: number, height: number, ratio: number): [number, number] {
  if (width / height >= ratio)
    width = height * ratio
  else
    height = width / ratio
  return [width, height]
}

export class ScreenWnd extends Wnd {
  protected subscription: Pubsub.Subscription
  private fullscreenBase: HTMLElement
  private canvasHolder: HTMLElement
  private scaler: Scaler
  private hideEdge = true
  private contentWidth = 0  // Content size, except fullscreen
  private contentHeight = 0

  constructor(wndMgr: WindowManager, protected app: App, protected nes: Nes,
              protected stream: AppEvent.Stream)
  {
    super(wndMgr, (WIDTH - HEDGE * 2) * 2, (HEIGHT - VEDGE * 2) * 2 + Wnd.MENUBAR_HEIGHT, 'NES')
    if (app == null || nes == null || stream == null)
      return

    this.setUpMenuBar()
    this.contentHolder.style.overflow = 'hidden'

    this.fullscreenBase = document.createElement('div')
    this.fullscreenBase.className = 'full-size'
    DomUtil.setStyles(this.fullscreenBase, {
      position: 'relative',
      overflow: 'hidden',
    })
    this.setContent(this.fullscreenBase)

    this.canvasHolder = document.createElement('div')
    DomUtil.setStyles(this.canvasHolder, {
      transitionDuration: '0.1s',
      transitionProperty: 'width, height',
    })
    this.fullscreenBase.appendChild(this.canvasHolder)

    this.setScaler(new NearestNeighborScaler())
    this.addResizeBox()

    this.subscription = this.stream
      .subscribe(type => {
        switch (type) {
        case AppEvent.Type.RENDER:
          this.render()
          break
        case AppEvent.Type.RESET:
          this.scaler.reset()
          break
        }
      })

    this.contentWidth = (WIDTH - HEDGE * 2) * 2
    this.contentHeight = (HEIGHT - VEDGE * 2) * 2
    this.updateContentSize(this.contentWidth, this.contentHeight)
  }

  protected onEvent(action: string, param?: any): any {
    switch (action) {
    case 'resize':
      {
        const {width, height} = param
        this.onResized(width, height)
      }
      break
    case 'openMenu':
      this.stream.triggerOpenMenu()
      break
    case 'closeMenu':
      this.stream.triggerCloseMenu()
      break
    }
  }


  public onResized(width: number, height: number): void {
    this.contentWidth = width
    this.contentHeight = height
    this.updateContentSize(width, height - Wnd.MENUBAR_HEIGHT)
  }

  public setClientSize(width: number, height: number): Wnd {
    width = Math.round(width)
    height = Math.round(height)
    super.setClientSize(width, height)
    this.contentWidth = width
    this.contentHeight = height
    this.updateContentSize(width, height)
    return this
  }

  public capture(): string {
    return this.scaler.getCanvas().toDataURL()
  }

  public setFullscreen(callback?: (isFullscreen: boolean) => boolean): boolean {
    return this.wndMgr.setFullscreen(this.contentHolder, (isFullscreen) => {
      if (isFullscreen) {
        let width = window.parent.screen.width
        let height = window.parent.screen.height
        if (width / height >= WIDTH / HEIGHT) {
          width = (height * (WIDTH / HEIGHT)) | 0
        } else {
          height = (width * (HEIGHT / WIDTH)) | 0
        }
        DomUtil.setStyles(this.fullscreenBase, {
          width: `${width}px`,
          height: `${height}px`,
          margin: 'auto',
        })
        this.contentHolder.style.backgroundColor = 'black'
        this.updateContentSize(width, height)
      } else {
        DomUtil.setStyles(this.fullscreenBase, {
          width: '',
          height: '',
          margin: '',
        })
        this.contentHolder.style.backgroundColor = ''
        this.updateContentSize(this.contentWidth, this.contentHeight)
      }
      if (callback)
        callback(isFullscreen)
      this.contentHolder.focus()
    })
  }

  public close(): void {
    if (this.subscription != null)
      this.subscription.unsubscribe()
    this.stream.triggerCloseWnd(this)
    super.close()
  }

  public render(): void {
    this.scaler.render(this.nes)
  }

  protected setClientScale(scale: number): Wnd {
    const w = ((WIDTH - (this.hideEdge ? HEDGE * 2 : 0)) * scale) | 0
    const h = ((HEIGHT - (this.hideEdge ? VEDGE * 2 : 0)) * scale) | 0
    return this.setClientSize(w, h)
  }

  protected updateContentSize(width: number, height: number) {
    if (!this.fullscreenBase)
      return

    const w = !this.hideEdge ? width : (width * (WIDTH / (WIDTH - HEDGE * 2))) | 0
    const h = !this.hideEdge ? height : (height * (HEIGHT / (HEIGHT - VEDGE * 2))) | 0
    const left = !this.hideEdge ? 0 : -(w * HEDGE / WIDTH) | 0
    const top = !this.hideEdge ? 0 : -(h * VEDGE / HEIGHT) | 0
    DomUtil.setStyles(this.canvasHolder, {
      position: 'absolute',
      width: `${w}px`,
      height: `${h}px`,
      top: `${top}px`,
      left: `${left}px`,
    })
  }

  protected setUpMenuBar(): void {
    this.addMenuBar([
      {
        label: 'File',
        submenu: [
          {
            label: 'Pause',
            click: () => {
              if (this.nes.getCpu().isPaused())
                this.stream.triggerRun()
              else
                this.stream.triggerPause()
            },
          },
          {
            label: 'Reset',
            click: () => {
              this.stream.triggerReset()
              this.stream.triggerRun()
            },
          },
          {
            label: 'Screenshot',
            click: () => {
              takeScreenshot(this.wndMgr, this)
            },
          },
          {
            label: 'Save',
            click: () => {
              this.app.saveData()
            },
          },
          {
            label: 'Load',
            click: () => {
              this.app.loadData()
            },
          },
          {
            label: 'Quit',
            click: () => {
              this.close()
            },
          },
        ],
      },
      {
        label: 'View',
        submenu: [
          {
            label: '1x1',
            click: () => {
              this.setClientScale(1)
            },
          },
          {
            label: '2x2',
            click: () => {
              this.setClientScale(2)
            },
          },
          {
            label: 'Adjust aspect ratio',
            click: () => {
              this.adjustAspectRatio()
            },
          },
          {
            label: 'Fullscreen',
            click: () => {
              this.setFullscreen()
            },
          },
        ],
      },
      {
        label: 'Scaler',
        submenu: [
          {
            label: 'Nearest',
            click: () => {
              this.setScaler(new NearestNeighborScaler())
            },
          },
          {
            label: 'Scanline',
            click: () => {
              this.setScaler(new ScanlineScaler())
            },
          },
          {
            label: 'Epx',
            click: () => {
              this.setScaler(new EpxScaler())
            },
          },
        ],
      },
      {
        label: 'Debug',
        submenu: [
          {
            label: 'Edge',
            click: () => {
              this.toggleEdge()
            },
          },
          {
            label: 'Palette',
            click: () => {
              this.app.createPaletWnd()
            },
          },
          {
            label: 'NameTable',
            click: () => {
              this.app.createNameTableWnd()
            },
          },
          {
            label: 'PatternTable',
            click: () => {
              this.app.createPatternTableWnd()
            },
          },
          {
            label: 'Trace',
            click: () => {
              this.app.createTraceWnd()
            },
          },
          {
            label: 'Registers',
            click: () => {
              this.app.createRegisterWnd()
            },
          },
          {
            label: 'Control',
            click: () => {
              this.app.createControlWnd()
            },
          },
          {
            label: 'FPS',
            click: () => {
              this.createFpsWnd()
            },
          },
        ],
      },
    ])
  }

  protected maximize() {
    const winWidth = window.innerWidth
    const winHeight = window.innerHeight
    const maxWidth = winWidth - 2  // -2 for border size
    const maxHeight = winHeight - Wnd.TITLEBAR_HEIGHT - Wnd.MENUBAR_HEIGHT - 2

    const w = Math.round(WIDTH - (this.hideEdge ? HEDGE * 2 : 0))
    const h = Math.round(HEIGHT - (this.hideEdge ? VEDGE * 2 : 0))
    const [width, height] = fitAspectRatio(maxWidth, maxHeight, w / h)

    const x = (winWidth - (width + 2)) / 2
    const y = (winHeight - (height + Wnd.TITLEBAR_HEIGHT + Wnd.MENUBAR_HEIGHT + 2)) / 2
    this.setPos(Math.round(x), Math.round(y))
    this.setClientSize(width, height)
  }

  private adjustAspectRatio() {
    const rect = this.contentHolder.getBoundingClientRect()
    const w = WIDTH - (this.hideEdge ? HEDGE * 2 : 0)
    const h = HEIGHT - (this.hideEdge ? VEDGE * 2 : 0)
    const [width, height] = fitAspectRatio(rect.width, rect.height, w / h)
    this.setClientSize(width, height)
  }

  private toggleEdge() {
    this.hideEdge = !this.hideEdge
    this.updateContentSize(this.contentHolder.offsetWidth, this.contentHolder.offsetHeight)
  }

  private setScaler(scaler: Scaler): void {
    const initial = this.scaler == null
    this.scaler = scaler
    DomUtil.removeAllChildren(this.canvasHolder)
    this.canvasHolder.appendChild(scaler.getCanvas())

    if (!initial)
      this.render()
  }

  private createFpsWnd(): void {
    const fpsWnd = new FpsWnd(this.wndMgr, this.stream)
    this.wndMgr.add(fpsWnd)
  }
}