// Creating a configure store !
import { configureStore } from "@reduxjs/toolkit";
import reservation_Reducer from "./Features/reservationSlice";
import customerReducer from "./Features/customerSlice";
export const store = configureStore({
  reducer: {
    reservtion: reservation_Reducer,
    customers: customerReducer,
  },
});

export default store;
