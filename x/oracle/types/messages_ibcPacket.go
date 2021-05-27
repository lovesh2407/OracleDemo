package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSendIbcPacket{}

func NewMsgSendIbcPacket(
	sender string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	ClientID string,
	OracleScriptID int32,
	Calldata string,
	AskCount int32,
	MinCount int32,
) *MsgSendIbcPacket {
	return &MsgSendIbcPacket{
		Sender:           sender,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		ClientID:         ClientID,
		OracleScriptID:   OracleScriptID,
		Calldata:         Calldata,
		AskCount:         AskCount,
		MinCount:         MinCount,
	}
}

func (msg *MsgSendIbcPacket) Route() string {
	return RouterKey
}

func (msg *MsgSendIbcPacket) Type() string {
	return "SendIbcPacket"
}

func (msg *MsgSendIbcPacket) GetSigners() []sdk.AccAddress {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sender}
}

func (msg *MsgSendIbcPacket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendIbcPacket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}
	return nil
}
