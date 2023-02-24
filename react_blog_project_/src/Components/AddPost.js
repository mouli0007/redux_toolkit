import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { post_added } from "../Features/postSlice";

const AddPost = () => {
  // Getting the actions !
  const dispatch = useDispatch();

  // Getting the state
  const users = useSelector((state) => state.users);
  //   const posts = useSelector((state) => state.posts);

  //
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  console.log("userid is " + userId);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const user_Options = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  const onSavedPostClicked = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(post_added(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const onSave = Boolean(title) && Boolean(content);

  return (
    <>
      <section>
        <h2>Add New Post !</h2>

        <form onSubmit={onSavedPostClicked}>
          <label htmlFor="postTitle">Post Title :</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
          {/*  */}

          <label htmlFor="postAuthor">Person:</label>
          <select
            name="postAuthor"
            id=""
            value={userId}
            onChange={onAuthorChanged}
          >
            <option value=""></option>
            {user_Options}
          </select>
          <label htmlFor="postContent">Post Content :</label>
          <textarea
            type="text"
            id="postTitle"
            name="postTitle"
            value={content}
            onChange={onContentChanged}
          />
          <button type="button" disabled={!onSave} onClick={onSavedPostClicked}>
            Save Post
          </button>
        </form>
      </section>
    </>
  );
};

export default AddPost;
