// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendIbcPacket } from "./types/oracle/tx";
import { MsgUpdateStock } from "./types/oracle/tx";
import { MsgCreateStock } from "./types/oracle/tx";
import { MsgDeleteStock } from "./types/oracle/tx";
const types = [
    ["/lovesh2407.OracleDemo.oracle.MsgSendIbcPacket", MsgSendIbcPacket],
    ["/lovesh2407.OracleDemo.oracle.MsgUpdateStock", MsgUpdateStock],
    ["/lovesh2407.OracleDemo.oracle.MsgCreateStock", MsgCreateStock],
    ["/lovesh2407.OracleDemo.oracle.MsgDeleteStock", MsgDeleteStock],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgSendIbcPacket: (data) => ({ typeUrl: "/lovesh2407.OracleDemo.oracle.MsgSendIbcPacket", value: data }),
        msgUpdateStock: (data) => ({ typeUrl: "/lovesh2407.OracleDemo.oracle.MsgUpdateStock", value: data }),
        msgCreateStock: (data) => ({ typeUrl: "/lovesh2407.OracleDemo.oracle.MsgCreateStock", value: data }),
        msgDeleteStock: (data) => ({ typeUrl: "/lovesh2407.OracleDemo.oracle.MsgDeleteStock", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
