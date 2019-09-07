export default class Util {
    static hex(x: number, order?: number): string;
    static clamp(x: number, min: number, max: number): number;
    static getExt(fileName: string): string;
    static convertUint8ArrayToBase64String(src: Uint8Array): string;
    static convertBase64StringToUint8Array(src: string): Uint8Array;
}
