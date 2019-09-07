import { Address, Byte } from './types';
export declare const enum PadBit {
    A = 0,
    B = 1,
    SELECT = 2,
    START = 3,
    U = 4,
    D = 5,
    L = 6,
    R = 7
}
export declare const enum PadValue {
    A = 1,
    B = 2,
    SELECT = 4,
    START = 8,
    U = 16,
    D = 32,
    L = 64,
    R = 128
}
export declare enum ChannelType {
    PULSE = 0,
    TRIANGLE = 1,
    SAWTOOTH = 2,
    NOISE = 3,
    DMC = 4
}
export declare const kChannelTypes: ChannelType[];
export declare class Apu {
    private triggerIrq;
    private regs;
    private channels;
    private frameInterrupt;
    private dmcInterrupt;
    private gamePad;
    constructor(triggerIrq: () => void);
    getChannelTypes(): ChannelType[];
    reset(): void;
    save(): object;
    load(saveData: any): void;
    read(adr: Address): Byte;
    write(adr: Address, value: Byte): void;
    getVolume(ch: number): number;
    getFrequency(ch: number): number;
    getDutyRatio(ch: number): number;
    setPadStatus(no: number, status: Byte): void;
    onHblank(hcount: number): void;
    private isIrqEnabled;
}
