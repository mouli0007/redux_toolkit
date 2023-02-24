import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Mouli VJ" },
  { id: "1", name: "Karthik" },
  { id: "2", name: "Nethaji" },
  { id: "2", name: "Azhar" },
  { id: "2", name: "Logeshwaran" },
];
export const user_Slice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default user_Slice.reducer;
