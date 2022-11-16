import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { $host } from "../../../utils/axios";
import { toast } from "react-toastify";

const error = arg => {
	toast.error(arg);
};

const initialState = {
	item: [],
	isLoading: false,
	isError: false,
	addShopItem: {},
	addDecorItem: {}
};

export const addDecorItem = createAsyncThunk(
	"basket/addDecorItem",
	async params => {
		try {
			const { data } = await $host.post("basket/decor", params);

			return { data, toast: toast(data.message) };
		} catch (e) {
			console.error(e);
		}
	}
);

export const getBasket = createAsyncThunk("basket/getBasket", async () => {
	try {
		const { data } = await $host.get("basket");

		return data;
	} catch (e) {
		console.error(e);
	}
});

export const basketSlice = createSlice({
	name: "basket",
	initialState,
	reducers: {},
	extraReducers: {
		//add decor
		[addDecorItem.pending]: state => {
			state.isLoading = true;
			state.item = [];
		},
		[addDecorItem.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.item.push(action.payload.decor);
		},
		[addDecorItem.rejected]: state => {
			state.isLoading = false;
			state.item = [];
			state.isError = true;
		},
		[getBasket.pending]: state => {
			state.isLoading = true;
			state.item = [];
		},
		[getBasket.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.item = action.payload;
		},
		[getBasket.rejected]: state => {
			state.isLoading = false;
			state.item = [];
			state.isError = true;
		}
	}
});

export const basket = basketSlice.reducer;
