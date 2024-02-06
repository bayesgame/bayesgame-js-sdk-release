export declare class Uint8ArrayUint128Encoder {
    static encode(number: bigint, array: number[]): bigint;
    static decode(encoded: bigint): [bigint, number[]];
}
export declare class Uint8ArrayUint64And128Encoder {
    static encode(number64: bigint, number128: bigint, array: number[]): bigint;
    static decode(encoded: bigint): [bigint, bigint, number[]];
}
