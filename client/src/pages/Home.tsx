import React, { FC } from "react";
import Card from "../components/Card";
import { posts } from "../data";

const Home: FC = () => {
  return (
    <div className="home">
      {posts.map((post) => {
        return <Card post={post} key={post.id} />;
      })}
    </div>
  );
};

export default Home;
