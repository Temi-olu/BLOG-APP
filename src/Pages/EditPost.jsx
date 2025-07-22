import React, { useState } from 'react'
import article from '../Data/article'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';



function EditPost() {
  const {id} = useParams()
 const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [category, setCategory] = useState();

 useEffect(()=>{
  const postToEdit = article.find(item => item.id === id);
   if (postToEdit) {
      setTitle(postToEdit.title);
    setContent(postToEdit.content);
   }
})


  return (
    <div>
       <div className="ml-55 mt-2">
        <h1 className="font-bold text-3xl mb-6">Edit Post</h1>

        <form>
          <div className="flex flex-col">
            <label className="mb-2 font-bold">Title</label>
            <input
              className=" mb-2 w-[400px] rounded-lg p-3 border"
              type="text"
             value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter your post title"
            ></input>
            <label className="mb-2">Content</label>
            <textarea
              className=" mb-2 w-[400px] rounded-lg p-3 border h-[130px]"
              placeholder="Write a post content here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <label className="mb-2">Tags</label>
            <input
              className=" mb-2 w-[400px] rounded-lg p-3 border"
              placeholder="Enter tags seperated by commas"
               value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
            <label className="mb-2">Category</label>
            <select className="w-[400px] rounded-lg p-3 border"
             value={category}
              onChange={(e) => setCategory(e.target.value)}>
              <option></option>
              <option></option>
            </select>
          </div>
        </form>

        <button className=" bg-blue-900 w-24 text-white p-2 rounded-full mt-3 relative  left-[900px]">
          Edit
        </button>
      </div>
    </div>
  )
}

export default EditPost
