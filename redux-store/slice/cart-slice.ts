import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState =
  typeof window !== undefined
    ? Cookies.get("cart")
      ? { ...JSON.parse(Cookies.get("cart") as string), loading: true }
      : {
          cartItems: [],
          loading: true,
        }
    : null;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((x: any) => x.id === item.id);

      if (existingItem) {
        state.cartItems = state.cartItems.map((x: any) =>
          x.id === existingItem.id ? item : x
        );
        //check if you can fixed this first to makre you can add items indefinitely
      } else {
        state.cartItems = [...state.cartItems, item];
      }
      state.itemsPrice = state.cartItems.reduce(
        (acc: any, item: any) => acc + item.price * item.qty,
        0
      );
      state.itemQuantity = item.qty;
      //Todo tax shipping price and total price
      Cookies.set("cart", JSON.stringify(state));
    },
    deleteCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x: any) => x.id !== action.payload
      );
      state.itemsPrice = state.cartItems.reduce(
        (acc: any, item: any) => acc + item.price * item.qty,
        0
      );
      //Todo tax shipping price and total price
      Cookies.set("cart", JSON.stringify(state));
    },
    increaseCartItem: (state, action) => {
      const item = state.cartItems.find((x: any) => x.id === action.payload);
      item.qty++;
      state.itemsPrice = state.cartItems.reduce(
        (acc: any, item: any) => acc + item.price * item.qty,
        0
      );
      state.itemQuantity = item.qty;
      //Todo tax shipping price and total price
      Cookies.set("cart", JSON.stringify(state));
    },
    decreaseCartItem: (state, action: PayloadAction<any>) => {
      const item = state.cartItems.find((x: any) => x.id === action.payload);
      item.qty--;
      state.itemsPrice = state.cartItems.reduce(
        (acc: any, item: any) => acc + item.price * item.qty,
        0
      );
      state.itemQuantity = item.qty;
      //Todo tax shipping price and total price
      Cookies.set("cart", JSON.stringify(state));
    },
    clearCart: (state) => {
      state.cartItems = [];
      Cookies.set("cart", JSON.stringify(state));
    },
    hideLoading: (state: any) => {
      state.loading = false;
    },
  },
});

export const {
  addToCart,
  decreaseCartItem,
  increaseCartItem,
  deleteCartItem,
  clearCart,
  hideLoading,
} = cartSlice.actions;
export default cartSlice.reducer;
