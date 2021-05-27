import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendIbcPacket } from "./types/oracle/tx";
import { MsgUpdateStock } from "./types/oracle/tx";
import { MsgCreateStock } from "./types/oracle/tx";
import { MsgDeleteStock } from "./types/oracle/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgSendIbcPacket: (data: MsgSendIbcPacket) => EncodeObject;
    msgUpdateStock: (data: MsgUpdateStock) => EncodeObject;
    msgCreateStock: (data: MsgCreateStock) => EncodeObject;
    msgDeleteStock: (data: MsgDeleteStock) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
