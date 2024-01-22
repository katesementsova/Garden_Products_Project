import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    products: productsSlice,
  },
});
