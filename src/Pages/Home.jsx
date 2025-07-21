import React from "react";
import Body from "../Component/Body";
import article from "../Data/article";
import PostCard from "../Component/PostCard";
function Home() {
  return (
    <div className="">
      <Body />
      <div className=" mt-4 items-center ">
        <h1>Top articles</h1>
        {article.map((items, index) => (
          <div className=" ">
          <PostCard
            key={index}
            img={items.img}
            imgClass=""
            title={items.title}
            excerpt={items.excerpt}
            // Author={items.author}
            // Tags={items.tags}
            // createdat={items.createdAt}
          />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
