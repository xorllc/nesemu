import { Bus } from '../bus';
import { ChannelType } from '../apu';
import { Cpu } from '../cpu/cpu';
import { Ppu } from '../ppu/ppu';
export interface PrgBankController {
    setPrgBank(bank: number, page: number): void;
}
export interface MapperOptions {
    bus: Bus;
    cpu: Cpu;
    ppu: Ppu;
    prgBankCtrl: PrgBankController;
    prgSize: number;
    romHash?: string;
}
export declare class Mapper {
    reset(): void;
    onHblank(_hcount: number): void;
    save(): object;
    load(_saveData: any): void;
    getExtraSoundChannelTypes(): ChannelType[];
    getSoundVolume(_channel: number): number;
    getSoundFrequency(_channel: number): number;
    getSoundDutyRatio(_channel: number): number;
}
