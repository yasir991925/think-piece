import React, { useContext } from "react";
import Post from "./Post";
import { PostContext } from "../Providers/PostsProviders";
import CreatePost from "./CreatePost";

const PostList = (props) => {
  const posts = useContext(PostContext);

  if (!posts) {
    return <h1>laoding</h1>;
  }

  return (
    <div className="ui segment">
      <CreatePost />
      <h1>Posts</h1>
      <div className="ui cards">
        {posts.map((p, i) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
