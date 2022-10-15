// import React, { FC, ReactNode } from "react";

import { Link } from "react-router-dom";

type IPost = {
  id: number;
  title: string;
  img: string;
  desc: string;
  longDesc: string;
};

const Card = ({ post }: { post: IPost }) => {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <span className="title">{post.title}</span>
        <img src={post.img} alt="" className="img" />
        <p className="desc">{post.desc}</p>
        <button className="cardButton">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
