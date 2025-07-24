import React from 'react'
import background from "../assets/background.jpeg"
function Body() {
  return (
    <div className='ml-44 mt-4'>
  <img src={background} className=' rounded-lg h-[250px] w-[1000px]'/>
    <div className='ml-14 relative bottom-49  text-white'>
     <h1 className='mb-5 font-extrabold font-serif text-2xl'>TechTales: Unveiling the Future of Technology</h1>
     <p className='mb-5'>Explore the latest trends,insights and innovation shaping the tech landscape from AI to cybersecurity,we've got you<br/> covered.</p>
     <button className='bg-blue-600 p-3 rounded-md font-bold'>Start Reading</button>
    </div>
    </div>
  )
}

export default Body