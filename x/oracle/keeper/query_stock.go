package keeper

//func listStock(ctx sdk.Context, keeper Keeper, legacyQuerierCdc *codec.LegacyAmino) ([]byte, error) {
//	msgs := keeper.GetAllStock(ctx)
//
//	bz, err := codec.MarshalJSONIndent(legacyQuerierCdc, msgs)
//	if err != nil {
//		return nil, sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error())
//	}
//
//	return bz, nil
//}

//func getStock(ctx sdk.Context, key string, keeper Keeper, legacyQuerierCdc *codec.LegacyAmino) ([]byte, error) {
//	id, err := strconv.ParseUint(key, 10, 64)
//	if err != nil {
//		return nil, err
//	}
//
//	if !keeper.HasStock(ctx, id) {
//		return nil, sdkerrors.ErrKeyNotFound
//	}
//
//	msg := keeper.GetStock(ctx, id)
//
//	bz, err := codec.MarshalJSONIndent(legacyQuerierCdc, msg)
//	if err != nil {
//		return nil, sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, err.Error())
//	}
//
//	return bz, nil
//}
