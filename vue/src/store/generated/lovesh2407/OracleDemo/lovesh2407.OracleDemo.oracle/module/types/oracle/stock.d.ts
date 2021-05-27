import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "lovesh2407.OracleDemo.oracle";
export interface Stock {
    creator: string;
    id: number;
    title: string;
    price: string;
}
export declare const Stock: {
    encode(message: Stock, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Stock;
    fromJSON(object: any): Stock;
    toJSON(message: Stock): unknown;
    fromPartial(object: DeepPartial<Stock>): Stock;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
