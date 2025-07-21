import React from "react";
import article from "../Data/article";
function Article() {
  return (
    <div className="ml-16 ">
      <h1 className="ml-15 mt-3 font-bold text-2xl">My Posts</h1>
       
      <div className=" mt-9">
        <table className="divide-y divide-gray-200 border-1 rounded-lg border-gray-300 shadow-2xs">
          <tr className="flex mt-5 ">
            <th className=" px-29 py-3">Title</th>
            <th className=" px-29 py-3">Author</th>
            <th className=" px-29 py-3">Tags</th>
            <th className=" px-39 py-3">Published Date</th>
          </tr>
          <div className="">
            {article.map((items, index) => (
              <tr
                key={index}
                className="" >
                <td className="px-20 py-3">{items.title} </td>
                <td className="px-10 py-3">{items.author}</td>
                <td className="px-50 py-3">{items.tags}</td>
                <td className="px-10 py-3">{items.createdAt}</td>
              </tr>
            ))}
          </div>
        </table>
      </div>
    </div>
  );
}

export default Article;
