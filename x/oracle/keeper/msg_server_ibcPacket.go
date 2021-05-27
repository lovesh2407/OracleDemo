package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
	"github.com/lovesh2407/OracleDemo/x/oracle/types"
)

func (k msgServer) SendIbcPacket(goCtx context.Context, msg *types.MsgSendIbcPacket) (*types.MsgSendIbcPacketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.IbcPacketPacketData

	packet.ClientID = msg.ClientID
	packet.OracleScriptID = msg.OracleScriptID
	packet.Calldata = msg.Calldata
	packet.AskCount = msg.AskCount
	packet.MinCount = msg.MinCount

	// Transmit the packet
	err := k.TransmitIbcPacketPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendIbcPacketResponse{}, nil
}
