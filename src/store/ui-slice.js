import { createSlice } from "@reduxjs/toolkit";

let uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      };
    }
  }
});

export const uiSliceActions = uiSlice.actions;

export default uiSlice;
