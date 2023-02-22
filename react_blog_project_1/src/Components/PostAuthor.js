import { useSelector } from "react-redux";

import { select_users } from "../Features/usersSlice";

import React from "react";

const PostAuthor = ({ userID }) => {
  const users = useSelector(select_users);

  const author = users.find((user) => user.id === userID);

  return (
    <>
      <span> by {author ? author.name : "Unknown_Author"}</span>
    </>
  );
};

export default PostAuthor;
