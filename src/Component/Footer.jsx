import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { CgCopyright } from "react-icons/cg";
function Footer() {
  return (
    <div className=''> 
        <div className='bg-blue-950 text-gray-300 p-5'>
          <div className=''>
<ul className='flex  justify-center gap-12'>
  <li>About Us</li>
  <li>Contact</li>
  <li>Privacy Policy</li>
  <li>Terms of Service</li>
</ul>

<div className='flex justify-center gap-12 m-3'>
<FaInstagram size={20}/>
<FaXTwitter  size={20}/>
<FaLinkedin  size={20}/>
</div>
</div>
        <div className='flex justify-center'>
          <CgCopyright className='relative top-1' />
        <h1> Tech Tales.All right reserved.</h1>
        </div>

        </div>

    </div>
  )
}

export default Footer
