import { Mapper, MapperOptions } from './mapper';
declare class Mapper023Base extends Mapper {
    private options;
    private ram;
    private prgBankMode;
    private prgBank;
    private chrBank;
    private irqControl;
    private irqLatch;
    private irqCounter;
    constructor(options: MapperOptions, mapping: {
        [key: number]: number;
    });
    reset(): void;
    save(): object;
    load(saveData: any): void;
    onHblank(_hcount: number): void;
    private setPrgBank;
    private setChrBankOffset;
}
export declare class Mapper023 extends Mapper023Base {
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
}
export declare class Mapper025 extends Mapper023Base {
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
}
export {};
