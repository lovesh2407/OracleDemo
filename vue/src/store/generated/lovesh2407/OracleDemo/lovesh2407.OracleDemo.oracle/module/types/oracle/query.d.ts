import { Reader, Writer } from "protobufjs/minimal";
import { Stock } from "../oracle/stock";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "lovesh2407.OracleDemo.oracle";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetStockRequest {
    id: number;
}
export interface QueryGetStockResponse {
    Stock: Stock | undefined;
}
export interface QueryAllStockRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllStockResponse {
    Stock: Stock[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetStockRequest: {
    encode(message: QueryGetStockRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetStockRequest;
    fromJSON(object: any): QueryGetStockRequest;
    toJSON(message: QueryGetStockRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetStockRequest>): QueryGetStockRequest;
};
export declare const QueryGetStockResponse: {
    encode(message: QueryGetStockResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetStockResponse;
    fromJSON(object: any): QueryGetStockResponse;
    toJSON(message: QueryGetStockResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetStockResponse>): QueryGetStockResponse;
};
export declare const QueryAllStockRequest: {
    encode(message: QueryAllStockRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllStockRequest;
    fromJSON(object: any): QueryAllStockRequest;
    toJSON(message: QueryAllStockRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllStockRequest>): QueryAllStockRequest;
};
export declare const QueryAllStockResponse: {
    encode(message: QueryAllStockResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllStockResponse;
    fromJSON(object: any): QueryAllStockResponse;
    toJSON(message: QueryAllStockResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllStockResponse>): QueryAllStockResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Stock(request: QueryGetStockRequest): Promise<QueryGetStockResponse>;
    StockAll(request: QueryAllStockRequest): Promise<QueryAllStockResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Stock(request: QueryGetStockRequest): Promise<QueryGetStockResponse>;
    StockAll(request: QueryAllStockRequest): Promise<QueryAllStockResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
