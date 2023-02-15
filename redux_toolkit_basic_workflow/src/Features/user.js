// We have to create a slice here !

import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  name: "",
  email: "",
  age: 0,
  company: "",
  role: "",
  salary: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialStateValue,
  },

  //   Reducer Fuction to manipulate the state !

  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
