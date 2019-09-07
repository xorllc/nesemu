import { ChannelType } from '../../nes/apu';
import { Mapper, MapperOptions } from './mapper';
declare class Mapper024Base extends Mapper {
    private options;
    private ram;
    private chrRegs;
    private prgCount;
    private prgBank;
    private ppuBankMode;
    private mirrorMode;
    private irqControl;
    private irqLatch;
    private irqCounter;
    private channels;
    private frequencyScaling;
    constructor(options: MapperOptions, mapping: {
        [key: number]: number;
    });
    reset(): void;
    save(): object;
    load(saveData: any): void;
    onHblank(hcount: number): void;
    getExtraSoundChannelTypes(): ChannelType[];
    getSoundVolume(channel: number): number;
    getSoundFrequency(channel: number): number;
    private setPrgBank;
    private setChrBank;
    private writeSound;
    private setupAudio;
    private updateSound;
}
export declare class Mapper024 extends Mapper024Base {
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
}
export declare class Mapper026 extends Mapper024Base {
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
}
export {};
