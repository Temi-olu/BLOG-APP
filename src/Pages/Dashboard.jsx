import React from "react";
import article from "../Data/article";
import PostCard from "../Component/PostCard";
import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <div className="ml-54  ">
      <h1>My Posts</h1>
      <div className=" ">
        <table className=" divide-y w-[800px]">
          <tr className="flex gap-64 px-6">
            <th className="">Title</th>
            <th className="">Status</th>
            <th className="">Action</th>
         </tr>
    {article.map((items, index) => (
    <div className="flex">
    <PostCard key={index}
     title={items.title} 
     status={items.status} 
     />
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
