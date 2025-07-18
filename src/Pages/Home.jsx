import React from "react";
import Body from "../Component/Body";
import article from "../Data/article";
import PostCard from "../Component/PostCard";
function Home() {
  return (
    <div className="">
      <Body />
      <div className=" ml-44   ">
        {article.map((items, index) => (
          <div className="">
          <PostCard
            
            key={index}
            img={items.img}
            title={items.title}
            excerpt={items.excerpt}
            Author={items.author}
            Tags={items.tags}
            createdat={items.createdAt}
          />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
