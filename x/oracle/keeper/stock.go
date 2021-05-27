package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/lovesh2407/OracleDemo/x/oracle/types"
	"strconv"
)

// GetStockCount get the total number of stock
func (k Keeper) GetStockCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StockCountKey))
	byteKey := types.KeyPrefix(types.StockCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetStockCount set the total number of stock
func (k Keeper) SetStockCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StockCountKey))
	byteKey := types.KeyPrefix(types.StockCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendStock appends a stock in the store with a new id and update the count
func (k Keeper) AppendStock(
	ctx sdk.Context,
	creator string,
	title string,
	price string,
) uint64 {
	// Create the stock
	count := k.GetStockCount(ctx)
	var stock = types.Stock{
		Creator: creator,
		Id:      count,
		Title:   title,
		Price:   price,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StockKey))
	value := k.cdc.MustMarshalBinaryBare(&stock)
	store.Set(GetStockIDBytes(stock.Id), value)

	// Update stock count
	k.SetStockCount(ctx, count+1)

	return count
}

// SetStock set a specific stock in the store
func (k Keeper) SetStock(ctx sdk.Context, stock types.Stock) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StockKey))
	b := k.cdc.MustMarshalBinaryBare(&stock)
	store.Set(GetStockIDBytes(stock.Id), b)
}

// GetStock returns a stock from its id
func (k Keeper) GetStock(ctx sdk.Context, id uint64) types.Stock {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StockKey))
	var stock types.Stock
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetStockIDBytes(id)), &stock)
	return stock
}

// HasStock checks if the stock exists in the store
func (k Keeper) HasStock(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StockKey))
	return store.Has(GetStockIDBytes(id))
}

// GetStockOwner returns the creator of the stock
func (k Keeper) GetStockOwner(ctx sdk.Context, id uint64) string {
	return k.GetStock(ctx, id).Creator
}

// RemoveStock removes a stock from the store
func (k Keeper) RemoveStock(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StockKey))
	store.Delete(GetStockIDBytes(id))
}

// GetAllStock returns all stock
func (k Keeper) GetAllStock(ctx sdk.Context) (list []types.Stock) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StockKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Stock
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetStockIDBytes returns the byte representation of the ID
func GetStockIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetStockIDFromBytes returns ID in uint64 format from a byte array
func GetStockIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
