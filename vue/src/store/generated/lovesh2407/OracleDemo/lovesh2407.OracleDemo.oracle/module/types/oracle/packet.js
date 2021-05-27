/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "lovesh2407.OracleDemo.oracle";
const baseOraclePacketData = {};
export const OraclePacketData = {
    encode(message, writer = Writer.create()) {
        if (message.noData !== undefined) {
            NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
        }
        if (message.ibcPacketPacket !== undefined) {
            IbcPacketPacketData.encode(message.ibcPacketPacket, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOraclePacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.noData = NoData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ibcPacketPacket = IbcPacketPacketData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOraclePacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromJSON(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.ibcPacketPacket !== undefined &&
            object.ibcPacketPacket !== null) {
            message.ibcPacketPacket = IbcPacketPacketData.fromJSON(object.ibcPacketPacket);
        }
        else {
            message.ibcPacketPacket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.noData !== undefined &&
            (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
        message.ibcPacketPacket !== undefined &&
            (obj.ibcPacketPacket = message.ibcPacketPacket
                ? IbcPacketPacketData.toJSON(message.ibcPacketPacket)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOraclePacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromPartial(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.ibcPacketPacket !== undefined &&
            object.ibcPacketPacket !== null) {
            message.ibcPacketPacket = IbcPacketPacketData.fromPartial(object.ibcPacketPacket);
        }
        else {
            message.ibcPacketPacket = undefined;
        }
        return message;
    },
};
const baseNoData = {};
export const NoData = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNoData };
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
    fromJSON(_) {
        const message = { ...baseNoData };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseNoData };
        return message;
    },
};
const baseIbcPacketPacketData = {
    ClientID: "",
    OracleScriptID: 0,
    Calldata: "",
    AskCount: 0,
    MinCount: 0,
};
export const IbcPacketPacketData = {
    encode(message, writer = Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIbcPacketPacketData };
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
    fromJSON(object) {
        const message = { ...baseIbcPacketPacketData };
        if (object.ClientID !== undefined && object.ClientID !== null) {
            message.ClientID = String(object.ClientID);
        }
        else {
            message.ClientID = "";
        }
        if (object.OracleScriptID !== undefined && object.OracleScriptID !== null) {
            message.OracleScriptID = Number(object.OracleScriptID);
        }
        else {
            message.OracleScriptID = 0;
        }
        if (object.Calldata !== undefined && object.Calldata !== null) {
            message.Calldata = String(object.Calldata);
        }
        else {
            message.Calldata = "";
        }
        if (object.AskCount !== undefined && object.AskCount !== null) {
            message.AskCount = Number(object.AskCount);
        }
        else {
            message.AskCount = 0;
        }
        if (object.MinCount !== undefined && object.MinCount !== null) {
            message.MinCount = Number(object.MinCount);
        }
        else {
            message.MinCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ClientID !== undefined && (obj.ClientID = message.ClientID);
        message.OracleScriptID !== undefined &&
            (obj.OracleScriptID = message.OracleScriptID);
        message.Calldata !== undefined && (obj.Calldata = message.Calldata);
        message.AskCount !== undefined && (obj.AskCount = message.AskCount);
        message.MinCount !== undefined && (obj.MinCount = message.MinCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIbcPacketPacketData };
        if (object.ClientID !== undefined && object.ClientID !== null) {
            message.ClientID = object.ClientID;
        }
        else {
            message.ClientID = "";
        }
        if (object.OracleScriptID !== undefined && object.OracleScriptID !== null) {
            message.OracleScriptID = object.OracleScriptID;
        }
        else {
            message.OracleScriptID = 0;
        }
        if (object.Calldata !== undefined && object.Calldata !== null) {
            message.Calldata = object.Calldata;
        }
        else {
            message.Calldata = "";
        }
        if (object.AskCount !== undefined && object.AskCount !== null) {
            message.AskCount = object.AskCount;
        }
        else {
            message.AskCount = 0;
        }
        if (object.MinCount !== undefined && object.MinCount !== null) {
            message.MinCount = object.MinCount;
        }
        else {
            message.MinCount = 0;
        }
        return message;
    },
};
const baseIbcPacketPacketAck = { ClientID: "" };
export const IbcPacketPacketAck = {
    encode(message, writer = Writer.create()) {
        if (message.ClientID !== "") {
            writer.uint32(10).string(message.ClientID);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIbcPacketPacketAck };
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
    fromJSON(object) {
        const message = { ...baseIbcPacketPacketAck };
        if (object.ClientID !== undefined && object.ClientID !== null) {
            message.ClientID = String(object.ClientID);
        }
        else {
            message.ClientID = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ClientID !== undefined && (obj.ClientID = message.ClientID);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIbcPacketPacketAck };
        if (object.ClientID !== undefined && object.ClientID !== null) {
            message.ClientID = object.ClientID;
        }
        else {
            message.ClientID = "";
        }
        return message;
    },
};
