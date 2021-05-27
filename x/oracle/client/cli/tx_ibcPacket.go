package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	channelutils "github.com/cosmos/cosmos-sdk/x/ibc/core/04-channel/client/utils"
	"github.com/lovesh2407/OracleDemo/x/oracle/types"
)

var _ = strconv.Itoa(0)

func CmdSendIbcPacket() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send-ibcPacket [src-port] [src-channel] [ClientID] [OracleScriptID] [Calldata] [AskCount] [MinCount]",
		Short: "Send a ibcPacket over IBC",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsClientID := string(args[2])
			argsOracleScriptID, _ := strconv.ParseInt(args[3], 10, 64)
			argsCalldata := string(args[4])
			argsAskCount, _ := strconv.ParseInt(args[5], 10, 64)
			argsMinCount, _ := strconv.ParseInt(args[6], 10, 64)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			sender := clientCtx.GetFromAddress().String()
			srcPort := args[0]
			srcChannel := args[1]

			// Get the relative timeout timestamp
			timeoutTimestamp, err := cmd.Flags().GetUint64(flagPacketTimeoutTimestamp)
			if err != nil {
				return err
			}
			consensusState, _, _, err := channelutils.QueryLatestConsensusState(clientCtx, srcPort, srcChannel)
			if err != nil {
				return err
			}
			if timeoutTimestamp != 0 {
				timeoutTimestamp = consensusState.GetTimestamp() + timeoutTimestamp
			}

			msg := types.NewMsgSendIbcPacket(sender, srcPort, srcChannel, timeoutTimestamp, string(argsClientID), int32(argsOracleScriptID), string(argsCalldata), int32(argsAskCount), int32(argsMinCount))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	cmd.Flags().Uint64(flagPacketTimeoutTimestamp, DefaultRelativePacketTimeoutTimestamp, "Packet timeout timestamp in nanoseconds. Default is 10 minutes.")
	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
