import React, { useState } from 'react'
// import comment from '../Data/comment'
 import article from '../Data/article'
 import { FaUserCircle } from "react-icons/fa";
 function ArticleDetails() {
  const[commentbtn , setCommentbtn]=useState('')
  // to save the comment array 
  const[comment, setComment]= useState([])

// const filtered = comment.filter((item) => item.parentId === null)


 const post = article.find((item)=> item.id ===2 )
 function handleOnClick (){
    const newComment = {
      id: Date.now(),         // unique id
      parentId: null,         // top-level for now
      text: commentbtn.trim() // the actual text
    };
     setComment([...comment, newComment]); // add to basket
    setCommentbtn("")
  }
  

return (
    <div className='ml-33 w-[1020px]'>
        <div>
     <h1 className='font-bold text-2xl  mb-3'>{post.title}</h1>
     <p className='captialize text-gray-500 mb-3'>By {post.author}.{post.status} on {post.createdAt}</p>
      <p className='rounded-xl bg-gray-200 mb-3 w-30 px-4 py-1 '>{post.tags}</p>
      <p className='captitalize'>{post.content}</p>
      </div>
   <h1 className='font-bold mb-5 mt-5 text-xl ml-5'>Comment(3)</h1>
  <div className='flex gap-2'>
      <FaUserCircle  size={32} className='relative top-2 '/>
    <input type="text"
     placeholder='Write a comment'
      className='w-[800px] p-3 border rounded-lg'
      value={commentbtn}
       onChange={(e)=> setCommentbtn(e.target.value)}
      />
    <button onClick={handleOnClick} className=' text-white bg-blue-950 px-2 h-10 top-1  rounded-xl  relative right-34'>Post Comment</button>
  </div>
  {comment.map((item)=>
     <div key={item.id}>
      {item.text}
      <div className='relative top-1 space-x-2 '>
      <button onClick={replyOnClick}>Reply</button>
      <button>Edit</button>
      <button>Delete</button>
      </div>
  </div> )}
   
     <button className='bg-gray-200 rounded-xl font-bold p-2 mt-6 ml-6 '>Back to Articles</button>
        <button className='bg-gray-200 rounded-xl font-bold p-2 ml-4'>Edit Articles</button>
    </div>
  )
}

export default ArticleDetails