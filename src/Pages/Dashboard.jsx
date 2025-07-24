
import { useState } from "react";
import article from "../Data/article";
import { toast } from "react-toastify";
function Dashboard() {
  const[articles , setArticle]=useState(article)
  function deletbtn(id) {
    setArticle(articles.filter(item => item.id !== id));
    toast.success('Successfullly deleted')
  }
  return (
    <div className="ml-58">
      <div className=" mt-17">
        <table className="rounded-s w-[900px] divide-y p-4 divide-gray-200 border-1  border-gray-300 shadow-2xs rounded-3xl">
          <tr className="flex mt-5 ">
            <th className=" px-25 py-3">Title</th>
            <th className=" px-29 py-3">Status</th>
            <th className=" px-25 py-3">Action</th>
          </tr>
          <div className="">
            {articles.map((items) => (
              <tr
                key={items.id}
                className="divide-y w-full divide-gray-200" >
                <td className="px-15 py-3">{items.title}</td>
                <td className="px-10 py-3">{items.status}</td>
                <td  className="px-29 ">Edit </td>
                 <td onClick={() => deletbtn(items.id)} className="">Delete</td>
              </tr>
            ))}
          </div>
        
        </table>
      </div>

     </div>


  );
}

export default Dashboard;
