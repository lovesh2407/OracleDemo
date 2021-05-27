package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/lovesh2407/OracleDemo/x/oracle/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) StockAll(c context.Context, req *types.QueryAllStockRequest) (*types.QueryAllStockResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var stocks []*types.Stock
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	stockStore := prefix.NewStore(store, types.KeyPrefix(types.StockKey))

	pageRes, err := query.Paginate(stockStore, req.Pagination, func(key []byte, value []byte) error {
		var stock types.Stock
		if err := k.cdc.UnmarshalBinaryBare(value, &stock); err != nil {
			return err
		}

		stocks = append(stocks, &stock)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStockResponse{Stock: stocks, Pagination: pageRes}, nil
}

func (k Keeper) Stock(c context.Context, req *types.QueryGetStockRequest) (*types.QueryGetStockResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var stock types.Stock
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasStock(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StockKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetStockIDBytes(req.Id)), &stock)

	return &types.QueryGetStockResponse{Stock: &stock}, nil
}
