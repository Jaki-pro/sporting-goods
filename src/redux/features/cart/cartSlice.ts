import { createSlice } from "@reduxjs/toolkit";
import { ObjectId } from "bson";
export type TCartItem = {
  productId: ObjectId;
  name: string;
  brand: string;
  stock: number;
  price: number;
  image: string;
  quantity: number;
};
type TInitialState = {
  items: TCartItem[];
};
const initialState: TInitialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(
        (x) => x.productId === product.productId
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...product });
      }
    },
    // removeFromCart: (state, action) => {
    //   const productId = action.payload;
    //   state.items = state.items.filter((x) => x.id !== productId);
    // },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find((x) => x.productId === productId);

      item!.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.items.find((x) => x.productId === productId);
      if (item!.quantity > 0) {
        item!.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((x) => x.productId !== productId);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
