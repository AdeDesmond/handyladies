import { create } from "zustand";

type State = {
  cartItems: string[];
};

type Action = {
  addToCart: (productId: string) => void;
  deleteCartProduct: (productId: string) => void;
};

export const useCartStore = create<State & Action>((set) => ({
  cartItems: [],
  addToCart: (productId) =>
    set((state: State) => ({ cartItems: [...state.cartItems, productId] })),
  deleteCartProduct: (productId) => set(() => ({ cartItems: [] })),
}));
