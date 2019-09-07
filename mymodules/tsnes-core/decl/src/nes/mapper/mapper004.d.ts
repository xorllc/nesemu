import { Mapper, MapperOptions } from './mapper';
export declare class Mapper004 extends Mapper {
    protected options: MapperOptions;
    protected regs: Uint8Array;
    protected ram: Uint8Array;
    protected maxPrg: number;
    protected bankSelect: number;
    protected irqHlineEnable: boolean;
    protected irqHlineValue: number;
    protected irqHlineCounter: number;
    protected irqLatch: number;
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
    reset(): void;
    save(): object;
    load(saveData: any): void;
    onHblank(hcount: number): void;
    protected setPrgBank(swap: number): void;
    protected setChrBank(swap: number): void;
    protected setIrqHlineValue(line: number): void;
    protected enableIrqHline(value: boolean): void;
    protected resetIrqHlineCounter(): void;
}
export declare class Mapper088 extends Mapper004 {
    protected options: MapperOptions;
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
}
export declare class Mapper095 extends Mapper004 {
    protected options: MapperOptions;
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
}
export declare class Mapper118 extends Mapper004 {
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
}
