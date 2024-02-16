import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (id, thunkApi) => {
    try {
      const result = await axios(`http://localhost:3333/products/${id}`);
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
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const productsSelector = (state) => state.products;

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
