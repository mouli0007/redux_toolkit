import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: initialStateValue,
  },

  reducers: {
    change_color: (state, action) => {
      state.value = action.payload;
    },

    clear_color: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { change_color, clear_color } = themeSlice.actions;
export default themeSlice.reducer;
