import { Mapper, MapperOptions } from './mapper';
export declare class Mapper003 extends Mapper {
    private options;
    private chrBank;
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
    save(): object;
    load(saveData: any): void;
}
export declare class Mapper185 extends Mapper003 {
    static create(options: MapperOptions): Mapper;
    constructor(options: MapperOptions);
}
