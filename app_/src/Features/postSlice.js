import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I have heared Good things !",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2",
    title: "Context Api",
    content: "Context API vs Redux Toolkit !",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    post_added: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const { post_added, remove_post } = postSlice.actions;
export const select_posts = (state) => state.posts;
export default postSlice.reducer;
