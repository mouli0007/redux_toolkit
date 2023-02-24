import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { selectAllPost } from "../Features/postSlice";
import { remove_post, clear_post } from "../Features/postSlice";
import PostAuthor from "./Post_Author";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPost);

  const ordered_post = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const rendered_post = ordered_post.map((post) => {
    return (
      <article key={post.id}>
        <p>{post.title}</p>
        <p>{post.content.substring(0, 100)}</p>

        <p className="postCredit">
          <PostAuthor userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
        </p>
            <ReactionButton post={post} />
            <br />
            <br />
        <button onClick={() => dispatch(remove_post(post.id))}>
          Remove Post
        </button>
      </article>
    );
  });
  return (
    <>
      <section>
        <h2>Blogs...</h2>
        {rendered_post}

        {posts.length > 0 && (
          <button className="clear_post" onClick={() => dispatch(clear_post())}>
            Clear_post
          </button>
        )}
      </section>
    </>
  );
};

export default PostList;
