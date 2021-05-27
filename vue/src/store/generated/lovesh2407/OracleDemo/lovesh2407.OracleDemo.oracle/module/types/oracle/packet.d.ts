import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "lovesh2407.OracleDemo.oracle";
export interface OraclePacketData {
    noData: NoData | undefined;
    /** this line is used by starport scaffolding # ibc/packet/proto/field */
    ibcPacketPacket: IbcPacketPacketData | undefined;
}
export interface NoData {
}
/**
 * this line is used by starport scaffolding # ibc/packet/proto/message
 * IbcPacketPacketData defines a struct for the packet payload
 */
export interface IbcPacketPacketData {
    ClientID: string;
    OracleScriptID: number;
    Calldata: string;
    AskCount: number;
    MinCount: number;
}
/** IbcPacketPacketAck defines a struct for the packet acknowledgment */
export interface IbcPacketPacketAck {
    ClientID: string;
}
export declare const OraclePacketData: {
    encode(message: OraclePacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): OraclePacketData;
    fromJSON(object: any): OraclePacketData;
    toJSON(message: OraclePacketData): unknown;
    fromPartial(object: DeepPartial<OraclePacketData>): OraclePacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
export declare const IbcPacketPacketData: {
    encode(message: IbcPacketPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcPacketPacketData;
    fromJSON(object: any): IbcPacketPacketData;
    toJSON(message: IbcPacketPacketData): unknown;
    fromPartial(object: DeepPartial<IbcPacketPacketData>): IbcPacketPacketData;
};
export declare const IbcPacketPacketAck: {
    encode(message: IbcPacketPacketAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcPacketPacketAck;
    fromJSON(object: any): IbcPacketPacketAck;
    toJSON(message: IbcPacketPacketAck): unknown;
    fromPartial(object: DeepPartial<IbcPacketPacketAck>): IbcPacketPacketAck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
