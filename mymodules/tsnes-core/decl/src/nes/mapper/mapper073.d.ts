import { Mapper, MapperOptions } from './mapper';
export declare class Mapper073 extends Mapper {
    private options;
    private ram;
    private prgBank;
    private irqEnable;
    private irqValue;
    private irqCounter;
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
    reset(): void;
    save(): object;
    load(saveData: any): void;
    onHblank(_hcount: number): void;
    private setPrgBank;
    private enableIrq;
}
