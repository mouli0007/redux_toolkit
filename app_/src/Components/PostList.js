import React from "react";
import { useSelector } from "react-redux";
import { select_posts } from "../Features/postSlice";
import Time_Ago from "./Time_Ago";
import PostAuthor from "./PostAuthor";
const PostList = () => {
  const posts = useSelector(select_posts);

  const ordered_post = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderPosts = ordered_post.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <h3>{post.content.substring(0, 100)}</h3>
        <p className="postCredit">
          <PostAuthor userID={post.userId} />
          <Time_Ago timeStamp={post.date} />
        </p>
      </article>
    );
  });
  return (
    <>
      <section>
        <h2>Posts</h2>
        {renderPosts}
      </section>
    </>
  );
};

export default PostList;
