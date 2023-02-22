import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Mouli VJ" },
  { id: "1", name: "Azhar" },
  { id: "2", name: "Nethaji" },
  { id: "3", name: "Karthik" },
  { id: "4", name: "Logeshwaran" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const select_users = (state) => state.users;

export default usersSlice.reducer;
