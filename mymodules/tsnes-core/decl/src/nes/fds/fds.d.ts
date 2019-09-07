import { Nes } from '../nes';
import { PrgBankController } from '../mapper/mapper';
export declare class Fds implements PrgBankController {
    private nes;
    private mapper;
    constructor(biosData: Uint8Array, nes: Nes);
    setImage(image: Uint8Array): boolean;
    getSideCount(): number;
    eject(): void;
    setSide(side: number): void;
    setPrgBank(_bank: number, _page: number): void;
}
