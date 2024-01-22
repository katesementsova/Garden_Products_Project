import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk(
  "category/getCategory",
  async (_, thunkApi) => {
    try {
      const result = await axios("http://localhost:3333/categories/all");
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const categorieSlice = createSlice({
  name: "category",
  initialState: {
    category: [],
    isLogin: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
    });
    builder.addCase(getCategory.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default categorieSlice.reducer;
