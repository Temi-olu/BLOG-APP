import React from 'react'
import { CiSettings } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { PiUsers } from "react-icons/pi";
import { PiNotePencilFill } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
function AdminPanel() {
  return (
    <div className=' ml-34'>
        <h1 className='font-medium text-md relative right-6'>Admin Panel</h1>
        <div className=''>
    <ul className='font-medium'>
        <li className='mb-4 hover:rounded-xl w-52 hover:relative hover:right-4 hover:bg-gray-400'><AiFillHome className='relative top-5 right-6'  />Dashboard</li>
        <li className='mb-4 hover:rounded-xl w-52 hover:relative hover:right-4 hover:bg-gray-400'><PiUsers className='relative top-5 right-6' />Users</li>
        <li className='mb-4 hover:rounded-xl w-52 hover:relative hover:right-4 hover:bg-gray-400'><PiNotePencilFill className='relative top-5 right-6' />Articles</li>
        <li className='mb-4 hover:rounded-xl w-52 hover:relative hover:right-4 hover:bg-gray-400'><FaRegCommentDots className='relative top-5 right-6' />Comments</li>
        <li className='mb-4 hover:rounded-xl w-52 hover:relative hover:right-4 hover:bg-gray-400'> <CiSettings className='relative top-5 right-6' />Settings</li>
    </ul>
    </div>
    <h1 className='relative top-[170px]'><FaLongArrowAltLeft className='relative top-5 right-6'/>Logout</h1>
    </div>
  )
}

export default AdminPanel
