import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkApi) => {
    try {
      const result = await axios("http://localhost:3333/products/all");
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export default productsSlice.reducer;

// Lesson 23/01/2024

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getAllProducts = createAsyncThunk(
//   "products/AllProducts",
//   async () => {
//     const response = await fetch("");
//     const data = await response.json();

//     return data;
//   }
// );
// export const productsSlice = createSlice({
//   name: "products",
//   initialState: {
//     basket: [],
//     productsList: [],
//     status: null,
//     error: null,
//   },
//   reducers: {
//     addToBasket(state, action) {
//       state.basket = [
//         ...state.basket,
//         state.productsList.filter((item) => item.id === action.payload),
//       ];
//       localStorage.setItem("products", JSON.stringify(state.basket));
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(getAllProducts.pending, (state) => {
//       state.status = "pending";
//       state.error = null;
//     });
//     builder.addCase(getAllProducts.fulfilled, (state, action) => {
//       state.status = "fulfield";
//       state.error = action.payload;
//     });
//     builder.addCase(getAllProducts.rejected, (state) => {
//       state.status = "rejected";
//       state.error = null;
//     });
//   },
// });

// export const { addToBasket } = productsSlice.actions;

// export default productsSlice.reducer;
