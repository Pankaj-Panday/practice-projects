import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// this is simple logic since it doesn't consider stock, quantity, etc
		addToCart(state, action) {
			state.items.push(action.payload);
		},
	},
});

export const selectAllItems = (state) => state.cart.items;
export const selectTotalPrice = (state) => {
	return state.cart.items
		.reduce((total, item) => {
			return total + item.price;
		}, 0)
		.toFixed(2);
};

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
