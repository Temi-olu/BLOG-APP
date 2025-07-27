import React, { useState } from "react";
import article from "../Data/article";

function Article() {
  // const [search , setSearch]=useState("")
  const [articles, setArticles]=useState(article)
   
  // function searchbar(){
  //    article.filter(item => {
  //     const keyword = search.toLowerCase()
  //        return(
  //         item.title.toLowerCase().includes(keyword) ||
  //         item.tags.some(tag => tag.toLowerCase().includes(keyword))
  //        )
  //    })
  // }
     function handleDelete(id){
        setArticles(articles.filter(item => item.id !== id ))
     }
  return (
    < div className="ml-16 ">
      <h1 className="ml-15 mt-3 font-bold text-2xl">My Posts</h1>
         {/* <input type="text"
          placeholder="   Search"  className="bg-gray-200 rounded-sm h-8 px-2"
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
         /> */}
      <div className=" mt-9">
        <table className="rounded-s divide-y divide-gray-200 border-1  border-gray-300 shadow-2xs rounded-3xl">
          <tr className="flex mt-5 ">
            <th className=" px-29 py-3">Title</th>
            <th className=" px-29 py-3">Author</th>
            <th className=" px-29 py-3">Tags</th>
            <th className=" px-39 py-3">Published Date</th>
          </tr>
          <div className="">
            {articles.map((items) => (
              <tr
                key={items.id}
                className="divide-y divide-gray-200" >
                <td className="px-20 py-3">{items.title}</td>
                <td className="px-10 py-3">{items.author}</td>
                <td className="px-50 py-3">{items.tags}</td>
                <td className="px-10 py-3">{items.createdAt}</td>
                 <td className="px-4">Edit</td>
                 <td onClick={() => handleDelete(items.id)}>Delete</td>
              </tr>
            ))}
          </div>
        
        </table>
      </div>
    </div>
  );
}

export default Article;
