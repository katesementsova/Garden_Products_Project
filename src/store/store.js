import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productApi } from "../api/productApi";
import basketSlice from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import categorySlice from "../store/slices/categorySlice";
import ProductOfCategorySlice from "../store/slices/ProductOfCategorySlice";
import productsSlice from "./slices/productsSlice";

const rootReducer = combineReducers({
  category: categorySlice,
  [productApi.reducerPath]: productApi.reducer,
  basketProducts: basketSlice,
  productsOfCategory: ProductOfCategorySlice,
  productItem: productsSlice,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(productApi.middleware),
});

export const persistor = persistStore(store);

export default store;
