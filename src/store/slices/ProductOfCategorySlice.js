import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk(
  "categories/getCategory",
  async (id, thunkApi) => {
    try {
      const result = await axios(`http://localhost:3333/categories/${id}`);
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const productOfCategorySlice = createSlice({
  name: "categories",
  initialState: {
    categoryProducts: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, { payload }) => {
      state.categoryProducts = payload;
      state.isLoading = false;
    });
    builder.addCase(getCategory.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export default productOfCategorySlice.reducer;
