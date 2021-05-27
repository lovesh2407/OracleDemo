/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Stock } from "../oracle/stock";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "lovesh2407.OracleDemo.oracle";

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

const baseQueryGetStockRequest: object = { id: 0 };

export const QueryGetStockRequest = {
  encode(
    message: QueryGetStockRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetStockRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetStockRequest } as QueryGetStockRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStockRequest {
    const message = { ...baseQueryGetStockRequest } as QueryGetStockRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetStockRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetStockRequest>): QueryGetStockRequest {
    const message = { ...baseQueryGetStockRequest } as QueryGetStockRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetStockResponse: object = {};

export const QueryGetStockResponse = {
  encode(
    message: QueryGetStockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Stock !== undefined) {
      Stock.encode(message.Stock, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetStockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetStockResponse } as QueryGetStockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Stock = Stock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStockResponse {
    const message = { ...baseQueryGetStockResponse } as QueryGetStockResponse;
    if (object.Stock !== undefined && object.Stock !== null) {
      message.Stock = Stock.fromJSON(object.Stock);
    } else {
      message.Stock = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetStockResponse): unknown {
    const obj: any = {};
    message.Stock !== undefined &&
      (obj.Stock = message.Stock ? Stock.toJSON(message.Stock) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetStockResponse>
  ): QueryGetStockResponse {
    const message = { ...baseQueryGetStockResponse } as QueryGetStockResponse;
    if (object.Stock !== undefined && object.Stock !== null) {
      message.Stock = Stock.fromPartial(object.Stock);
    } else {
      message.Stock = undefined;
    }
    return message;
  },
};

const baseQueryAllStockRequest: object = {};

export const QueryAllStockRequest = {
  encode(
    message: QueryAllStockRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllStockRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllStockRequest } as QueryAllStockRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStockRequest {
    const message = { ...baseQueryAllStockRequest } as QueryAllStockRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStockRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllStockRequest>): QueryAllStockRequest {
    const message = { ...baseQueryAllStockRequest } as QueryAllStockRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllStockResponse: object = {};

export const QueryAllStockResponse = {
  encode(
    message: QueryAllStockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Stock) {
      Stock.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllStockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllStockResponse } as QueryAllStockResponse;
    message.Stock = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Stock.push(Stock.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStockResponse {
    const message = { ...baseQueryAllStockResponse } as QueryAllStockResponse;
    message.Stock = [];
    if (object.Stock !== undefined && object.Stock !== null) {
      for (const e of object.Stock) {
        message.Stock.push(Stock.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllStockResponse): unknown {
    const obj: any = {};
    if (message.Stock) {
      obj.Stock = message.Stock.map((e) => (e ? Stock.toJSON(e) : undefined));
    } else {
      obj.Stock = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllStockResponse>
  ): QueryAllStockResponse {
    const message = { ...baseQueryAllStockResponse } as QueryAllStockResponse;
    message.Stock = [];
    if (object.Stock !== undefined && object.Stock !== null) {
      for (const e of object.Stock) {
        message.Stock.push(Stock.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Stock(request: QueryGetStockRequest): Promise<QueryGetStockResponse>;
  StockAll(request: QueryAllStockRequest): Promise<QueryAllStockResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Stock(request: QueryGetStockRequest): Promise<QueryGetStockResponse> {
    const data = QueryGetStockRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lovesh2407.OracleDemo.oracle.Query",
      "Stock",
      data
    );
    return promise.then((data) =>
      QueryGetStockResponse.decode(new Reader(data))
    );
  }

  StockAll(request: QueryAllStockRequest): Promise<QueryAllStockResponse> {
    const data = QueryAllStockRequest.encode(request).finish();
    const promise = this.rpc.request(
      "lovesh2407.OracleDemo.oracle.Query",
      "StockAll",
      data
    );
    return promise.then((data) =>
      QueryAllStockResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
