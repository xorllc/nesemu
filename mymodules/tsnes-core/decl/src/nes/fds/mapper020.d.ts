import { Mapper, MapperOptions } from '../mapper/mapper';
import { Nes } from '../nes';
export declare class Mapper020 extends Mapper {
    private biosData;
    private options;
    private ram;
    private regs;
    private nes;
    private diskSideImages;
    private image?;
    private headPointer;
    private irqCounter;
    private timerIrqOccurred;
    private transferComplete;
    private endOfHead;
    private scanningDisk;
    private delay;
    private readData;
    constructor(biosData: Uint8Array, options: MapperOptions);
    reset(): void;
    setUp(nes: Nes): void;
    setImage(image: Uint8Array): boolean;
    getSideCount(): number;
    onHblank(_hcount: number): void;
    eject(): void;
    setSide(side: number): void;
    private readDiskReg;
    private writeDiskReg;
}
