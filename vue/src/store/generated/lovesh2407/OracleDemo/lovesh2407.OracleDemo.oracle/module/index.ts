// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgSendIbcPacket: (data: MsgSendIbcPacket): EncodeObject => ({ typeUrl: "/lovesh2407.OracleDemo.oracle.MsgSendIbcPacket", value: data }),
    msgUpdateStock: (data: MsgUpdateStock): EncodeObject => ({ typeUrl: "/lovesh2407.OracleDemo.oracle.MsgUpdateStock", value: data }),
    msgCreateStock: (data: MsgCreateStock): EncodeObject => ({ typeUrl: "/lovesh2407.OracleDemo.oracle.MsgCreateStock", value: data }),
    msgDeleteStock: (data: MsgDeleteStock): EncodeObject => ({ typeUrl: "/lovesh2407.OracleDemo.oracle.MsgDeleteStock", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
