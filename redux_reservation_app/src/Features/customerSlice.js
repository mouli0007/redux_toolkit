import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const customer_slice = createSlice({
  name: "cutomer_reservation",
  initialState,
  reducers: {
    add_customer: (state, action) => {
      state.value.push(action.payload);
    },

    add_food_to_customer: (state, action) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },

    remove_reservation_menu: (state, action) => {
      const updated_reservation = state.value.filter(
        (res) => res.id !== action.payload
      );
      state.value = updated_reservation;
    },
  },
});

export const { add_customer, add_food_to_customer, remove_reservation_menu } =
  customer_slice.actions;

export default customer_slice.reducer;
