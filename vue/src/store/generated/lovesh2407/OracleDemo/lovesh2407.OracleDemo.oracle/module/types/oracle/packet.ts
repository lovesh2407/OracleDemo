/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "lovesh2407.OracleDemo.oracle";

export interface OraclePacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  ibcPacketPacket: IbcPacketPacketData | undefined;
}

export interface NoData {}

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

const baseOraclePacketData: object = {};

export const OraclePacketData = {
  encode(message: OraclePacketData, writer: Writer = Writer.create()): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.ibcPacketPacket !== undefined) {
      IbcPacketPacketData.encode(
        message.ibcPacketPacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OraclePacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOraclePacketData } as OraclePacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.ibcPacketPacket = IbcPacketPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OraclePacketData {
    const message = { ...baseOraclePacketData } as OraclePacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.ibcPacketPacket !== undefined &&
      object.ibcPacketPacket !== null
    ) {
      message.ibcPacketPacket = IbcPacketPacketData.fromJSON(
        object.ibcPacketPacket
      );
    } else {
      message.ibcPacketPacket = undefined;
    }
    return message;
  },

  toJSON(message: OraclePacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.ibcPacketPacket !== undefined &&
      (obj.ibcPacketPacket = message.ibcPacketPacket
        ? IbcPacketPacketData.toJSON(message.ibcPacketPacket)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OraclePacketData>): OraclePacketData {
    const message = { ...baseOraclePacketData } as OraclePacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.ibcPacketPacket !== undefined &&
      object.ibcPacketPacket !== null
    ) {
      message.ibcPacketPacket = IbcPacketPacketData.fromPartial(
        object.ibcPacketPacket
      );
    } else {
      message.ibcPacketPacket = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
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

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },
};

const baseIbcPacketPacketData: object = {
  ClientID: "",
  OracleScriptID: 0,
  Calldata: "",
  AskCount: 0,
  MinCount: 0,
};

export const IbcPacketPacketData = {
  encode(
    message: IbcPacketPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ClientID !== "") {
      writer.uint32(10).string(message.ClientID);
    }
    if (message.OracleScriptID !== 0) {
      writer.uint32(16).int32(message.OracleScriptID);
    }
    if (message.Calldata !== "") {
      writer.uint32(26).string(message.Calldata);
    }
    if (message.AskCount !== 0) {
      writer.uint32(32).int32(message.AskCount);
    }
    if (message.MinCount !== 0) {
      writer.uint32(40).int32(message.MinCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): IbcPacketPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIbcPacketPacketData } as IbcPacketPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ClientID = reader.string();
          break;
        case 2:
          message.OracleScriptID = reader.int32();
          break;
        case 3:
          message.Calldata = reader.string();
          break;
        case 4:
          message.AskCount = reader.int32();
          break;
        case 5:
          message.MinCount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcPacketPacketData {
    const message = { ...baseIbcPacketPacketData } as IbcPacketPacketData;
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

  toJSON(message: IbcPacketPacketData): unknown {
    const obj: any = {};
    message.ClientID !== undefined && (obj.ClientID = message.ClientID);
    message.OracleScriptID !== undefined &&
      (obj.OracleScriptID = message.OracleScriptID);
    message.Calldata !== undefined && (obj.Calldata = message.Calldata);
    message.AskCount !== undefined && (obj.AskCount = message.AskCount);
    message.MinCount !== undefined && (obj.MinCount = message.MinCount);
    return obj;
  },

  fromPartial(object: DeepPartial<IbcPacketPacketData>): IbcPacketPacketData {
    const message = { ...baseIbcPacketPacketData } as IbcPacketPacketData;
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

const baseIbcPacketPacketAck: object = { ClientID: "" };

export const IbcPacketPacketAck = {
  encode(
    message: IbcPacketPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ClientID !== "") {
      writer.uint32(10).string(message.ClientID);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): IbcPacketPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIbcPacketPacketAck } as IbcPacketPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ClientID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcPacketPacketAck {
    const message = { ...baseIbcPacketPacketAck } as IbcPacketPacketAck;
    if (object.ClientID !== undefined && object.ClientID !== null) {
      message.ClientID = String(object.ClientID);
    } else {
      message.ClientID = "";
    }
    return message;
  },

  toJSON(message: IbcPacketPacketAck): unknown {
    const obj: any = {};
    message.ClientID !== undefined && (obj.ClientID = message.ClientID);
    return obj;
  },

  fromPartial(object: DeepPartial<IbcPacketPacketAck>): IbcPacketPacketAck {
    const message = { ...baseIbcPacketPacketAck } as IbcPacketPacketAck;
    if (object.ClientID !== undefined && object.ClientID !== null) {
      message.ClientID = object.ClientID;
    } else {
      message.ClientID = "";
    }
    return message;
  },
};

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
