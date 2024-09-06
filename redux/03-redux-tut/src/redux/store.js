import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import productsReducer from "./slices/productSlice";
import cartRecuder from "./slices/cartSlice";

const store = configureStore({
	reducer: {
		counter: counterReducer,
		products: productsReducer,
		cart: cartRecuder,
	},
});

export default store;
