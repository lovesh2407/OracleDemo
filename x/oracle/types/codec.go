package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateStock{}, "oracle/CreateStock", nil)
	cdc.RegisterConcrete(&MsgUpdateStock{}, "oracle/UpdateStock", nil)
	cdc.RegisterConcrete(&MsgDeleteStock{}, "oracle/DeleteStock", nil)

	cdc.RegisterConcrete(&MsgSendIbcPacket{}, "oracle/SendIbcPacket", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateStock{},
		&MsgUpdateStock{},
		&MsgDeleteStock{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendIbcPacket{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(amino)
)
