/* eslint-disable */
import { Stock } from "../oracle/stock";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "lovesh2407.OracleDemo.oracle";
const baseGenesisState = { portId: "" };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.stockList) {
            Stock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.stockList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.stockList.push(Stock.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.portId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.stockList = [];
        if (object.stockList !== undefined && object.stockList !== null) {
            for (const e of object.stockList) {
                message.stockList.push(Stock.fromJSON(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = String(object.portId);
        }
        else {
            message.portId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.stockList) {
            obj.stockList = message.stockList.map((e) => e ? Stock.toJSON(e) : undefined);
        }
        else {
            obj.stockList = [];
        }
        message.portId !== undefined && (obj.portId = message.portId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.stockList = [];
        if (object.stockList !== undefined && object.stockList !== null) {
            for (const e of object.stockList) {
                message.stockList.push(Stock.fromPartial(e));
            }
        }
        if (object.portId !== undefined && object.portId !== null) {
            message.portId = object.portId;
        }
        else {
            message.portId = "";
        }
        return message;
    },
};
