import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/slices/product";
import userReducer from "./slices/users";

const store = configureStore({
  reducer: {
    products: productReducer,
    users:userReducer
  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
