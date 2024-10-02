import { createSlice } from "@reduxjs/toolkit";

const cartSLice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQty: 0,
    changed: false
  },
  reducers: {
    replaceCArt(state, action) {
      state.totalQty = action.payload.totalQty;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.changed = true;
      const existingItem = state.items.find(item => {
        return item.id === newItem.id;
      });
      state.totalQty++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quanty: 1,
          totalPrice: newItem.price,
          name: newItem.name
        });
      } else {
        existingItem.quanty++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      state.changed = true;
      const id = action.payload;
      state.totalQty--;
      const extingItem = state.items.find(item => item.id === id);

      if (extingItem.quanty === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        extingItem.quanty--;
        extingItem.totalPrice = extingItem.totalPrice - extingItem.price;
      }
    }
  }
});

export const cartActions = cartSLice.actions;

export default cartSLice;
