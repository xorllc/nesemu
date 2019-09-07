import { Mapper, MapperOptions } from './mapper';
export declare class Mapper001 extends Mapper {
    private options;
    private maxPrg;
    private ram;
    private register;
    private counter;
    private prgBankMode;
    private prgReg;
    private chrBank4k;
    private chrBank;
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
    save(): object;
    load(saveData: any): void;
    private resetRegister;
    private setChrBank;
    private setPrgBank;
}
