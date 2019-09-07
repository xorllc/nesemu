import { Mapper, MapperOptions } from './mapper';
declare class Mapper002Base extends Mapper {
    private options;
    private bank;
    constructor(prgBankShift: number, options: MapperOptions);
    save(): object;
    load(saveData: any): void;
    private setBank;
}
export declare class Mapper002 extends Mapper002Base {
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
}
export declare class Mapper093 extends Mapper002Base {
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
}
export {};
