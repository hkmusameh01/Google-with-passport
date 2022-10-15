import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { posts } from "../data";

const Post = () => {
  const { id } = useParams<{ id: string }>(); // return { id: 1 }
  const post = posts[Number(id) - 1];

  const location = useLocation();
  console.log(location);

  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};

export default Post;
