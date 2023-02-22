import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { post_added } from "../Features/postSlice";
import { select_users } from "../Features/usersSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const users = useSelector(select_users);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userID, setuserId] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setuserId(e.target.value);

  const onSavePost = (e) => {
    e.preventDefault();

    if (title && content) {
      dispatch(post_added(title, content, userID));
      setTitle("");
      setContent("");
    }
  };

  const canSave_ = Boolean(title) && Boolean(content);

  const userOptions = users.map((user) => {
    return (
      <>
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      </>
    );
  });

  return (
    <>
      <section>
        <h2>Add New Post </h2>
        {/* Form ! */}
        <form onSubmit={onSavePost}>
          <label htmlFor="postTitle">Post Title : </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChange}
          />

          <label htmlFor="postAuthor">Author:</label>
          <select name="postAuthor" id="postAuthor" onChange={onAuthorChange}>
            <option value=""></option>
            {userOptions}
          </select>
          <label htmlFor="postContent">Post Content : </label>
          <textarea
            type="text"
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChange}
          />

          <button type="button" onClick={onSavePost} disabled={!canSave_}>
            Submit Your Blog
          </button>
        </form>
      </section>
    </>
  );
};

export default AddPost;
