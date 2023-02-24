import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = {
  posts: [
    {
      id: "1",
      title: "Learning Redux",
      content: "Its Good to Learn",
      date: sub(new Date(), { minutes: 10 }).toISOString(),

      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
    },
  ],
};

const postSLice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    post_added: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
      },

      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },

    remove_post: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },

    clear_post: (state, action) => {
      state.posts = [];
    },

    reaction_added: (state, action) => {
      const { postId, reaction } = action.payload;
      const existing_post = state.posts.find((post) => post.id === postId);
      existing_post.reactions[reaction]++;
    },
  },
});

export const { post_added, remove_post, clear_post, reaction_added } =
  postSLice.actions;
export const selectAllPost = (state) => state.posts.posts;
export default postSLice.reducer;
