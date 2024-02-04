import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./slices/categorySlice";
import { productApi } from "../api/productApi";
import basketSlice from "./slices/cartSlice";
import ProductOfCategorySlice from "./slices/ProductOfCategorySlice";

const store = configureStore({
  reducer: {
    category: categorySlice,
    [productApi.reducerPath]: productApi.reducer,
    // products: productsSlice,
    basketProducts: basketSlice,
    productsOfCategory: ProductOfCategorySlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
