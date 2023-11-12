import { PostsIndex } from "./PostsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  const handleCreatePost = (params, successCallback) => {
    console.log("handleCreatePost", params);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.detail]);
      successCallback();
    });
  };

  return (
    <div className="container">
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex posts={posts} />
    </div>
  );
}
