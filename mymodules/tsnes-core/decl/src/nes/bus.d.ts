import { Address, Byte } from './types';
export declare class Bus {
    private readerFuncTable;
    private writerFuncTable;
    private readErrorReported;
    private writeErrorReported;
    constructor();
    clearMemoryMap(): void;
    setReadMemory(start: Address, end: Address, func: (adr: Address) => Byte): void;
    setWriteMemory(start: Address, end: Address, func: (adr: Address, value: Byte) => void): void;
    read8(adr: Address): Byte;
    write8(adr: Address, value: Byte): void;
    dump(start: Address, count: number): void;
}
