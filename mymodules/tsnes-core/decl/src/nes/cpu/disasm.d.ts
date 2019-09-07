import { Instruction } from './inst';
import { Bus } from '../bus';
export declare const kOpcode: {
    [key: number]: string;
};
export declare function disassemble(inst: Instruction, mem: Uint8Array, start: number, pc: number): string;
export declare function disasm(bus: Bus, pc: number): string;
