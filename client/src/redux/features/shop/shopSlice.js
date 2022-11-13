import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { $host } from "../../../utils/axios";

const error = arg => {
	toast.error(arg);
};

const initialState = {
	item: [],
	isLoading: false,
	isError: false,
	setSelectShopTypeId: "63663575cbbe866fa6b57d89",
	setSelectShopType: {}
};

export const getAllShop = createAsyncThunk("shop/getAllShop", async arg => {
	try {
		const { shopTypeId } = arg;

		const { data } = await $host.get("/shopitem", {
			params: {
				shopTypeId
			}
		});

		return data;
	} catch (e) {
		error(e.response.data.message);
	}
});

export const createShop = createAsyncThunk("shop/createShop", async params => {
	try {
		const { data } = await $host.post("/shopitem", params);

		return { data, toast: toast(data.message) };
	} catch (e) {
		error(e.response.data.message);
	}
});

const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {
		selectShopType: (state, action) => {
			state.setSelectShopType = action.payload;
			state.setSelectShopTypeId = action.payload._id;
		}
	},
	extraReducers: {
		// Get All types Shop
		[getAllShop.pending]: state => {
			state.isLoading = true;
			state.isError = false;
		},
		[getAllShop.fulfilled]: (state, action) => {
			state.item = action.payload?.shopItem;
			state.isLoading = false;
		},
		[getAllShop.rejected]: state => {
			state.item = [];
			state.isError = true;
		},
		// Creata shop
		[createShop.pending]: state => {
			state.isLoading = true;
			state.isError = false;
		},
		[createShop.fulfilled]: (state, action) => {
			state.item.push(action.payload);
			state.isLoading = false;
		},
		[createShop.rejected]: state => {
			state.item = [];
			state.isError = true;
		}
	}
});

export const { selectShopType } = shopSlice.actions;
export const shop = shopSlice.reducer;
