import React from 'react'
import article from '../Data/article'
import PostCard from '../Component/PostCard'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (

    <div className='ml-54 mt-5  w-[900px] '> 

      <h1>My Posts</h1>
  <div className='shadow-2xl mx-auto bg-white, p-6  '>
       <table className=' divide-y divide-gray-200'>
        <tr className=' '>
          <th className='text-left, py-2, px-4, uppercase, text-sm, text-gray-600'>Title</th>
          <th className='text-left, py-2, px-4, uppercase, text-sm, text-gray-600'>Status</th>
          <th className='text-left, py-2, px-4, uppercase, text-sm, text-gray-600' >Action</th>
         
        </tr>
        
        {article.map((items, index)=> (
          <div className='flex'>
            <PostCard
             
             key={index}
             title={items.title}
             status={items.status}
               />
             <button><Link to="/editpost">Edit|</Link></button>
              <button>Delete</button>
            </div>
        ))}

       </table>
</div>
    </div>


  )
}

export default Dashboard