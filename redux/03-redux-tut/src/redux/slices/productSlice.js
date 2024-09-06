import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async (_, { rejectWithValue }) => {
		try {
			const res = await fetch("https://dummyjson.com/products");
			const data = await res.json();
			return data;
		} catch (err) {
			console.log(err);
			return rejectWithValue("Some error while fetching data");
		}
	}
);

const initialState = {
	items: [],
	loading: false,
	error: null,
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state, action) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.items = action.payload.products;
				state.loading = false;
				state.error = null;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload; // since thunk was rejected with value the rejected value will be available in action.payload
			});
	},
});

// selectors
export const productsSelectors = {
	selectAllProducts: (state) => state.products.items,
	selectLoading: (state) => state.products.loading,
	selectError: (state) => state.products.error,
};

export default productsSlice.reducer;
