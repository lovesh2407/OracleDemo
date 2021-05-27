/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "lovesh2407.OracleDemo.oracle";

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

export interface MsgUpdateStockResponse {}

export interface MsgDeleteStock {
  creator: string;
  id: number;
}

export interface MsgDeleteStockResponse {}

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

export interface MsgSendIbcPacketResponse {}

const baseMsgCreateStock: object = { creator: "", title: "", price: "" };

export const MsgCreateStock = {
  encode(message: MsgCreateStock, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateStock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateStock } as MsgCreateStock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateStock {
    const message = { ...baseMsgCreateStock } as MsgCreateStock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    return message;
  },

  toJSON(message: MsgCreateStock): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateStock>): MsgCreateStock {
    const message = { ...baseMsgCreateStock } as MsgCreateStock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    return message;
  },
};

const baseMsgCreateStockResponse: object = { id: 0 };

export const MsgCreateStockResponse = {
  encode(
    message: MsgCreateStockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateStockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateStockResponse } as MsgCreateStockResponse;
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

  fromJSON(object: any): MsgCreateStockResponse {
    const message = { ...baseMsgCreateStockResponse } as MsgCreateStockResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateStockResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateStockResponse>
  ): MsgCreateStockResponse {
    const message = { ...baseMsgCreateStockResponse } as MsgCreateStockResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateStock: object = { creator: "", id: 0, title: "", price: "" };

export const MsgUpdateStock = {
  encode(message: MsgUpdateStock, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateStock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateStock } as MsgUpdateStock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateStock {
    const message = { ...baseMsgUpdateStock } as MsgUpdateStock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateStock): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.price !== undefined && (obj.price = message.price);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateStock>): MsgUpdateStock {
    const message = { ...baseMsgUpdateStock } as MsgUpdateStock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    return message;
  },
};

const baseMsgUpdateStockResponse: object = {};

export const MsgUpdateStockResponse = {
  encode(_: MsgUpdateStockResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateStockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateStockResponse } as MsgUpdateStockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateStockResponse {
    const message = { ...baseMsgUpdateStockResponse } as MsgUpdateStockResponse;
    return message;
  },

  toJSON(_: MsgUpdateStockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateStockResponse>): MsgUpdateStockResponse {
    const message = { ...baseMsgUpdateStockResponse } as MsgUpdateStockResponse;
    return message;
  },
};

const baseMsgDeleteStock: object = { creator: "", id: 0 };

export const MsgDeleteStock = {
  encode(message: MsgDeleteStock, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteStock {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteStock } as MsgDeleteStock;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteStock {
    const message = { ...baseMsgDeleteStock } as MsgDeleteStock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteStock): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteStock>): MsgDeleteStock {
    const message = { ...baseMsgDeleteStock } as MsgDeleteStock;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteStockResponse: object = {};

export const MsgDeleteStockResponse = {
  encode(_: MsgDeleteStockResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteStockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteStockResponse } as MsgDeleteStockResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteStockResponse {
    const message = { ...baseMsgDeleteStockResponse } as MsgDeleteStockResponse;
    return message;
  },

  toJSON(_: MsgDeleteStockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteStockResponse>): MsgDeleteStockResponse {
    const message = { ...baseMsgDeleteStockResponse } as MsgDeleteStockResponse;
    return message;
  },
};

const baseMsgSendIbcPacket: object = {
  sender: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  ClientID: "",
  OracleScriptID: 0,
  Calldata: "",
  AskCount: 0,
  MinCount: 0,
};

export const MsgSendIbcPacket = {
  encode(message: MsgSendIbcPacket, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.ClientID !== "") {
      writer.uint32(42).string(message.ClientID);
    }
    if (message.OracleScriptID !== 0) {
      writer.uint32(48).int32(message.OracleScriptID);
    }
    if (message.Calldata !== "") {
      writer.uint32(58).string(message.Calldata);
    }
    if (message.AskCount !== 0) {
      writer.uint32(64).int32(message.AskCount);
    }
    if (message.MinCount !== 0) {
      writer.uint32(72).int32(message.MinCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendIbcPacket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendIbcPacket } as MsgSendIbcPacket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.ClientID = reader.string();
          break;
        case 6:
          message.OracleScriptID = reader.int32();
          break;
        case 7:
          message.Calldata = reader.string();
          break;
        case 8:
          message.AskCount = reader.int32();
          break;
        case 9:
          message.MinCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendIbcPacket {
    const message = { ...baseMsgSendIbcPacket } as MsgSendIbcPacket;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.ClientID !== undefined && object.ClientID !== null) {
      message.ClientID = String(object.ClientID);
    } else {
      message.ClientID = "";
    }
    if (object.OracleScriptID !== undefined && object.OracleScriptID !== null) {
      message.OracleScriptID = Number(object.OracleScriptID);
    } else {
      message.OracleScriptID = 0;
    }
    if (object.Calldata !== undefined && object.Calldata !== null) {
      message.Calldata = String(object.Calldata);
    } else {
      message.Calldata = "";
    }
    if (object.AskCount !== undefined && object.AskCount !== null) {
      message.AskCount = Number(object.AskCount);
    } else {
      message.AskCount = 0;
    }
    if (object.MinCount !== undefined && object.MinCount !== null) {
      message.MinCount = Number(object.MinCount);
    } else {
      message.MinCount = 0;
    }
    return message;
  },

  toJSON(message: MsgSendIbcPacket): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.ClientID !== undefined && (obj.ClientID = message.ClientID);
    message.OracleScriptID !== undefined &&
      (obj.OracleScriptID = message.OracleScriptID);
    message.Calldata !== undefined && (obj.Calldata = message.Calldata);
    message.AskCount !== undefined && (obj.AskCount = message.AskCount);
    message.MinCount !== undefined && (obj.MinCount = message.MinCount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendIbcPacket>): MsgSendIbcPacket {
    const message = { ...baseMsgSendIbcPacket } as MsgSendIbcPacket;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.ClientID !== undefined && object.ClientID !== null) {
      message.ClientID = object.ClientID;
    } else {
      message.ClientID = "";
    }
    if (object.OracleScriptID !== undefined && object.OracleScriptID !== null) {
      message.OracleScriptID = object.OracleScriptID;
    } else {
      message.OracleScriptID = 0;
    }
    if (object.Calldata !== undefined && object.Calldata !== null) {
      message.Calldata = object.Calldata;
    } else {
      message.Calldata = "";
    }
    if (object.AskCount !== undefined && object.AskCount !== null) {
      message.AskCount = object.AskCount;
    } else {
      message.AskCount = 0;
    }
    if (object.MinCount !== undefined && object.MinCount !== null) {
      message.MinCount = object.MinCount;
    } else {
      message.MinCount = 0;
    }
    return message;
  },
};

const baseMsgSendIbcPacketResponse: object = {};

export const MsgSendIbcPacketResponse = {
  encode(
    _: MsgSendIbcPacketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendIbcPacketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendIbcPacketResponse,
    } as MsgSendIbcPacketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendIbcPacketResponse {
    const message = {
      ...baseMsgSendIbcPacketResponse,
    } as MsgSendIbcPacketResponse;
    return message;
  },

  toJSON(_: MsgSendIbcPacketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendIbcPacketResponse>
  ): MsgSendIbcPacketResponse {
    const message = {
      ...baseMsgSendIbcPacketResponse,
    } as MsgSendIbcPacketResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateStock(request: MsgCreateStock): Promise<MsgCreateStockResponse>;
  UpdateStock(request: MsgUpdateStock): Promise<MsgUpdateStockResponse>;
  DeleteStock(request: MsgDeleteStock): Promise<MsgDeleteStockResponse>;
  SendIbcPacket(request: MsgSendIbcPacket): Promise<MsgSendIbcPacketResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateStock(request: MsgCreateStock): Promise<MsgCreateStockResponse> {
    const data = MsgCreateStock.encode(request).finish();
    const promise = this.rpc.request(
      "lovesh2407.OracleDemo.oracle.Msg",
      "CreateStock",
      data
    );
    return promise.then((data) =>
      MsgCreateStockResponse.decode(new Reader(data))
    );
  }

  UpdateStock(request: MsgUpdateStock): Promise<MsgUpdateStockResponse> {
    const data = MsgUpdateStock.encode(request).finish();
    const promise = this.rpc.request(
      "lovesh2407.OracleDemo.oracle.Msg",
      "UpdateStock",
      data
    );
    return promise.then((data) =>
      MsgUpdateStockResponse.decode(new Reader(data))
    );
  }

  DeleteStock(request: MsgDeleteStock): Promise<MsgDeleteStockResponse> {
    const data = MsgDeleteStock.encode(request).finish();
    const promise = this.rpc.request(
      "lovesh2407.OracleDemo.oracle.Msg",
      "DeleteStock",
      data
    );
    return promise.then((data) =>
      MsgDeleteStockResponse.decode(new Reader(data))
    );
  }

  SendIbcPacket(request: MsgSendIbcPacket): Promise<MsgSendIbcPacketResponse> {
    const data = MsgSendIbcPacket.encode(request).finish();
    const promise = this.rpc.request(
      "lovesh2407.OracleDemo.oracle.Msg",
      "SendIbcPacket",
      data
    );
    return promise.then((data) =>
      MsgSendIbcPacketResponse.decode(new Reader(data))
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
