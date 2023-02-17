import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ["Mouli VJ", "Azhar", "Nethaji"],
};

export const reservation_slice = createSlice({
  name: "reservation",

  initialState,

  reducers: {
    add_reservation: (state, action) => {
      //   Add code goes here !
      state.value.push(action.payload);
    },

    remove_reservation: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { add_reservation,remove_reservation } = reservation_slice.actions;
export default reservation_slice.reducer;
