import background from '../assets/background.jpeg'
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Register() {
  const {register} = useForm()
  return (
    <div className='ml-44 mt-6'>
  <div className=' shadow-2xl rounded-lg -amber-200 h-[500px] w-[1020px]'>
 <img className='rounded-l-md h-[500px] w-[400px]' src={background} alt="" />
   <div className=' ml-20  text-white relative bottom-[380px]'>
 <h1 className='mb-10 font-bold text-4xl text-whote'>Welcome Back!</h1>
  <p className='mb-10  '>To keep connected with us please<br/> login with your personal info</p>
  <Link to='/login'><button className="relative left-[28px]  rounded-full w-[180px]  border-1 p-2">Sign in</button></Link>
  </div>
</div>
<div className='relative left-[550px] bottom-[470px]'>
<h1 className=' ml-12 font-bold text-3xl text-blue-950'>Create Account</h1>
<div className='flex'>
<CiFacebook size={24} className='ml-15 mt-6 mb-6' />
<FcGoogle   size={24} className='ml-15 mt-6 mb-6' />
<FaLinkedin size={24} className='ml-15 mt-6 mb-6' />
</div>
<p className='ml-12 mb-4'>or use your email for registration</p>
<div className='flex flex-col bg'>
  <input {...register("name", {
     required: "Name is required",
  minLength: {
  value: 8
    }
  })} 
  className='rounded-lg mb-6 w-88 p-3 bg-gray-200' type="text"  placeholder='Name'
     />
  <input {...register("email", {
                  required: "Email is required",
                  minLength: {
                    value: 8
                  }
                })} className=' rounded-lg mb-6 w-88 p-3 bg-gray-200' type="email" placeholder='Email'  />
  <input {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 10
                  }
                })} className=' rounded-lg mb-6 w-88 p-3 bg-gray-200' type="password" placeholder='Password' />
</div>
<button className='rounded-full  w-[200px] text-white text-md font-serif bg-blue-950 p-2 ml-19'>Sign Up</button>
</div>
  </div>
  )
}

export default Register;