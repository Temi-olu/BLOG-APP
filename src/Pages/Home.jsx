import React from "react";
import Body from "../Component/Body";
import article from "../Data/article";
import PostCard from "../Component/PostCard";
function Home() {
  return (
    <div className="h-screen">
      <Body />
      <div className=" ml-44 relative bottom-24 items-center ">
         <input type="text"
          placeholder="   Search" 
           className=" relative bottom-14  w-[1000px]   bg-gray-200 rounded-lg h-10 px-2"
          // value={search}
          // onChange={(e)=> setSearch(e.target.value)}
         />
         <div className="relative bottom-8">
        <select className=" bg-gray-300 px-2 py-1 rounded-full" >
         <option>Tags</option>
          <option>cop</option>
        </select>
        <select className=" ml-3 bg-gray-300 px-2 py-1 rounded-full">
         <option>Category</option>
          <option>cop</option>
        </select>
        <select className=" ml-3 bg-gray-300 px-2 py-1 rounded-full">
         <option>Author</option>
          <option>cop</option>
        </select>
        </div>
        <div className=" relative left-[590px]">
        {article.map((items, index) => (
          <div className="mt-10 ">
          <PostCard
            key={index}
            img={items.img}
            imgClass="w-[400px] rounded-lg"
            titleClass="relative   bottom-57 right-148 font-bold"
            excerptClass='relative bottom-56 right-148'
            title={items.title}
            excerpt={items.excerpt}
          
          />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
