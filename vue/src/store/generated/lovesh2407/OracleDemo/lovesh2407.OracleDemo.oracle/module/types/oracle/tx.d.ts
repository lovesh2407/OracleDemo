import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "lovesh2407.OracleDemo.oracle";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateStock {
    creator: string;
    title: string;
    price: string;
}
export interface MsgCreateStockResponse {
    id: number;
}
export interface MsgUpdateStock {
    creator: string;
    id: number;
    title: string;
    price: string;
}
export interface MsgUpdateStockResponse {
}
export interface MsgDeleteStock {
    creator: string;
    id: number;
}
export interface MsgDeleteStockResponse {
}
export interface MsgSendIbcPacket {
    sender: string;
    port: string;
    channelID: string;
    timeoutTimestamp: number;
    ClientID: string;
    OracleScriptID: number;
    Calldata: string;
    AskCount: number;
    MinCount: number;
}
export interface MsgSendIbcPacketResponse {
}
export declare const MsgCreateStock: {
    encode(message: MsgCreateStock, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateStock;
    fromJSON(object: any): MsgCreateStock;
    toJSON(message: MsgCreateStock): unknown;
    fromPartial(object: DeepPartial<MsgCreateStock>): MsgCreateStock;
};
export declare const MsgCreateStockResponse: {
    encode(message: MsgCreateStockResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateStockResponse;
    fromJSON(object: any): MsgCreateStockResponse;
    toJSON(message: MsgCreateStockResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateStockResponse>): MsgCreateStockResponse;
};
export declare const MsgUpdateStock: {
    encode(message: MsgUpdateStock, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateStock;
    fromJSON(object: any): MsgUpdateStock;
    toJSON(message: MsgUpdateStock): unknown;
    fromPartial(object: DeepPartial<MsgUpdateStock>): MsgUpdateStock;
};
export declare const MsgUpdateStockResponse: {
    encode(_: MsgUpdateStockResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateStockResponse;
    fromJSON(_: any): MsgUpdateStockResponse;
    toJSON(_: MsgUpdateStockResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateStockResponse>): MsgUpdateStockResponse;
};
export declare const MsgDeleteStock: {
    encode(message: MsgDeleteStock, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteStock;
    fromJSON(object: any): MsgDeleteStock;
    toJSON(message: MsgDeleteStock): unknown;
    fromPartial(object: DeepPartial<MsgDeleteStock>): MsgDeleteStock;
};
export declare const MsgDeleteStockResponse: {
    encode(_: MsgDeleteStockResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteStockResponse;
    fromJSON(_: any): MsgDeleteStockResponse;
    toJSON(_: MsgDeleteStockResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteStockResponse>): MsgDeleteStockResponse;
};
export declare const MsgSendIbcPacket: {
    encode(message: MsgSendIbcPacket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendIbcPacket;
    fromJSON(object: any): MsgSendIbcPacket;
    toJSON(message: MsgSendIbcPacket): unknown;
    fromPartial(object: DeepPartial<MsgSendIbcPacket>): MsgSendIbcPacket;
};
export declare const MsgSendIbcPacketResponse: {
    encode(_: MsgSendIbcPacketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendIbcPacketResponse;
    fromJSON(_: any): MsgSendIbcPacketResponse;
    toJSON(_: MsgSendIbcPacketResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendIbcPacketResponse>): MsgSendIbcPacketResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateStock(request: MsgCreateStock): Promise<MsgCreateStockResponse>;
    UpdateStock(request: MsgUpdateStock): Promise<MsgUpdateStockResponse>;
    DeleteStock(request: MsgDeleteStock): Promise<MsgDeleteStockResponse>;
    SendIbcPacket(request: MsgSendIbcPacket): Promise<MsgSendIbcPacketResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateStock(request: MsgCreateStock): Promise<MsgCreateStockResponse>;
    UpdateStock(request: MsgUpdateStock): Promise<MsgUpdateStockResponse>;
    DeleteStock(request: MsgDeleteStock): Promise<MsgDeleteStockResponse>;
    SendIbcPacket(request: MsgSendIbcPacket): Promise<MsgSendIbcPacketResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
