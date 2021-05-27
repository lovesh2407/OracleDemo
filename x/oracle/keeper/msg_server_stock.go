package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/lovesh2407/OracleDemo/x/oracle/types"
)

func (k msgServer) CreateStock(goCtx context.Context, msg *types.MsgCreateStock) (*types.MsgCreateStockResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendStock(
		ctx,
		msg.Creator,
		msg.Title,
		msg.Price,
	)

	return &types.MsgCreateStockResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateStock(goCtx context.Context, msg *types.MsgUpdateStock) (*types.MsgUpdateStockResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var stock = types.Stock{
		Creator: msg.Creator,
		Id:      msg.Id,
		Title:   msg.Title,
		Price:   msg.Price,
	}

	// Checks that the element exists
	if !k.HasStock(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetStockOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetStock(ctx, stock)

	return &types.MsgUpdateStockResponse{}, nil
}

func (k msgServer) DeleteStock(goCtx context.Context, msg *types.MsgDeleteStock) (*types.MsgDeleteStockResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasStock(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetStockOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveStock(ctx, msg.Id)

	return &types.MsgDeleteStockResponse{}, nil
}
