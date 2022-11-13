import { configureStore } from "@reduxjs/toolkit";
import { auth } from "./features/authSlice";
import { decor } from "./features/decor";
import { types } from "./features/typesDecor/typesSlice";
import { shopType } from "./features/shopType/shopTypeSlice";
import { shop } from "./features/shop/shopSlice";

export const store = configureStore(
	{
		reducer: {
			auth: auth,
			decor: decor,
			types: types,
			shop: shop,
			shopType: shopType,
			// [decorApi.reducerPath]: decorApi.reducer,
			// [typeApi.reducerPath]: typeApi.reducer,
		}
		// middleware: (getDefaultMiddleware) =>
		// 	getDefaultMiddleware().concat(
		// 		decorApi.mi
	})