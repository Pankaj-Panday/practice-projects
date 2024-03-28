import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
	IDLE: "idle",
	ERROR: "error",
	LOADING: "loading",
});

const initialState = {
	data: [],
	status: STATUS.IDLE,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		// setProducts(state, action) {
		// 	state.data = action.payload;
		// },
		// setStatus(state, action) {
		// 	state.status = action.payload;
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.status = STATUS.LOADING;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				(state.data = action.payload), (state.status = STATUS.IDLE);
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.status = STATUS.ERROR;
			});
	},
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks - middleware
// below is code for redux toolkit
export const fetchProducts = createAsyncThunk("product/fetch", async () => {
	const res = await fetch("https://fakestoreapi.com/products");
	const data = await res.json();
	return data;
});

// below is code for redux core
// export function fetchProducts() {
// 	return async function fetchProductThunk(dispatch, getState) {
// 		dispatch(setStatus(STATUS.LOADING));
// 		try {
// 			const res = await fetch("https://fakestoreapi.com/products");
// 			const data = await res.json();
// 			dispatch(setProducts(data));
// 			dispatch(setStatus(STATUS.IDLE));
// 		} catch (err) {
// 			console.log(err);
// 			dispatch(setStatus(STATUS.ERROR));
// 		}
// 	};
// }
