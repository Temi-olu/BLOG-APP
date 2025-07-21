import React from "react";
import article from "../Data/article";
import PostCard from "../Component/PostCard";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="ml-54  ">
      <h1>My Posts</h1>
      <div className="border  ">
        <table className=" divide-y w-[800px]">
          <tr className="flex gap-64 p-2">
            <th className="ml-16">Title</th>
            <th className="">Status</th>
            <th className="">Action</th>
         </tr>
       
    {article.map((items, index) => (
    <div className="">
      <div className=" bg-amber-600">
    <PostCard 
     key={index}
     title={items.title} 
     status={items.status} 
     />
     </div>
     <button>
     <Link to="/editpost">Edit|</Link>
     </button>
      <button>Delete</button>
            </div>
          ))}
       
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
