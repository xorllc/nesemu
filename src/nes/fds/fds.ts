import {Mapper020} from './mapper020'
import Nes from '../nes'
import {PrgBankController} from '../mapper/mapper'
import {Address, Byte} from '../types'

// Famicom Disk System
export default class Fds implements PrgBankController {
  private mapper: Mapper020

  constructor(biosData: Uint8Array, private nes: Nes) {
    const bus = this.nes.getBus()
    const cpu = this.nes.getCpu()
    const ppu = this.nes.getPpu()
    this.mapper = new Mapper020(biosData, {
      bus,
      cpu,
      ppu,
      prgBankCtrl: this,
      prgSize: biosData.length,
      writeToApu: (_adr: Address, _value: Byte) => {},  // Dummy
      readFromApu: (_adr: Address) => 0,  // Dummy
    })

    this.mapper.setUp(nes)

    this.nes.setMapper(this.mapper)
  }

  public setImage(image: Uint8Array): boolean {
    this.mapper.setImage(image)
    return true
  }

  public getSideCount(): number {
    return this.mapper.getSideCount()
  }

  public eject(): void {
    this.mapper.eject()
  }

  public setSide(side: number): void {
    this.mapper.setSide(side)
  }

  public setPrgBank(_bank: number, _page: number): void {
    // Dummy
  }
}
