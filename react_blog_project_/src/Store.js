import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Features/postSlice";
import userReducer from "./Features/usersSlice";
//
export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});
