package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateStock{}

func NewMsgCreateStock(creator string, title string, price string) *MsgCreateStock {
	return &MsgCreateStock{
		Creator: creator,
		Title:   title,
		Price:   price,
	}
}

func (msg *MsgCreateStock) Route() string {
	return RouterKey
}

func (msg *MsgCreateStock) Type() string {
	return "CreateStock"
}

func (msg *MsgCreateStock) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateStock) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateStock) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateStock{}

func NewMsgUpdateStock(creator string, id uint64, title string, price string) *MsgUpdateStock {
	return &MsgUpdateStock{
		Id:      id,
		Creator: creator,
		Title:   title,
		Price:   price,
	}
}

func (msg *MsgUpdateStock) Route() string {
	return RouterKey
}

func (msg *MsgUpdateStock) Type() string {
	return "UpdateStock"
}

func (msg *MsgUpdateStock) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateStock) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateStock) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateStock{}

func NewMsgDeleteStock(creator string, id uint64) *MsgDeleteStock {
	return &MsgDeleteStock{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteStock) Route() string {
	return RouterKey
}

func (msg *MsgDeleteStock) Type() string {
	return "DeleteStock"
}

func (msg *MsgDeleteStock) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteStock) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteStock) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
