import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
    products: productsSlice,
  },
});

export default store;

// Lesson 23/01/2024

// import { configureStore } from "@reduxjs/toolkit";
// import products from './slices'
