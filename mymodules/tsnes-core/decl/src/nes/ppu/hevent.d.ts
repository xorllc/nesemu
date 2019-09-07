export declare const enum HEventType {
    DUMMY = 0,
    PPU_CTRL = 1,
    PPU_MASK = 2,
    CHR_BANK_OFFSET = 3,
    MIRROR_MODE_BIT = 4,
    SCROLL_CURR = 5,
    SCROLL_FINE_X = 6
}
interface HEvent {
    type: HEventType;
    hcount: number;
    value: number;
    index: number;
}
export declare class HEvents {
    private renderBuf;
    private nextBuf;
    clear(): void;
    swap(): void;
    getCount(): number;
    getEvent(index: number): HEvent;
    getLastHcount(): number;
    add(hcount: number, type: HEventType, value: number, index?: number): void;
}
export declare class HStatus {
    ppuCtrl: number;
    ppuMask: number;
    chrBankOffset: number[];
    mirrorModeBit: number;
    scrollCurr: number;
    scrollFineX: number;
    constructor();
    reset(): void;
    copy(h: HStatus): void;
    set(type: HEventType, value: number, index: number): boolean;
}
export declare class HStatusMgr {
    current: HStatus;
    lastFrame: HStatus;
    save: HStatus;
    reset(): void;
    swap(): void;
}
export {};
