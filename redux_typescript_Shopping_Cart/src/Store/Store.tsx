import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Slices/cartSlice";
import ModalReducer from "../Slices/ModalSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    modal: ModalReducer,
  },
});

export type ROOTSTATE = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
