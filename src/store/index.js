import uiSlice from "./ui-slice";
import { configureStore } from "@reduxjs/toolkit";
import cartSLice from "./cart-slice";
const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSLice.reducer }
});

export default store;
