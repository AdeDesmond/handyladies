import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/redux-store/slice/cart-slice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
