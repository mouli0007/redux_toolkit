// Creating a Slice !

import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../FakeData";

export const _users = createSlice({
  name: "users",
  initialState: {
    value: UsersData,
  },

  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      const updated_List = state.value.filter(
        (user) => user.id !== action.payload
      );
      state.value = updated_List;
    },

    clear_list: (state, action) => {
      state.value = [];
    },

    // Important

    update_username: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});

export const { addUser, deleteUser, clear_list, update_username } =
  _users.actions;
export default _users.reducer;
