import { Link,  useNavigate } from "react-router-dom";
import Article from "../assets/Article.jpeg";
import Register from "./Register";
import { useState } from "react";
function Login() {
   const navigate = useNavigate
  const[email, setEmail]=useState('')
  const[password, setPassword]=useState('')
  const[login, setLogin]=useState('')

function handleSubmit(){
    
const Logins ={
  email: email,
  password: password,
}
if (email === "" || password==="") {
  alert("fill it")
} else {
  setLogin([...login, Logins])
   console.log(setLogin)
   setEmail('')
   setPassword("")
   navigate("/")
}

}

  return (
    <div className="ml-44 mt-6 ">
      <div className="rounded-md bg-blue-950  h-[500px] w-[1020px] ">
        <img className="rounded-l-md h-[500px] w-[510px]" src={Article}></img>
        <h1 className="text-white text-7xl relative bottom-76 left-25">Techtales</h1>
      </div>
      <div className=" mt-4 relative left-[600px] bottom-[450px]">
        <h1 className="text-white font-bold text-4xl mb-8 ">Welcome!</h1>
        <div className=" flex flex-col ">
          <input
            className="rounded-full mt-4 mb-6 w-88 p-4 bg-white "
            type="text"
            placeholder="Your e-mail"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <input
            className="rounded-full mb-6 w-88 p-4 bg-white "
            placeholder="password"
            value={password}
              onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <div className=" flex gap-6 mt-12">
          <Link to="/Register">
            <button className="rounded-full  w-[200px] text-gray-300 bg-amber-600 p-2">
              Create account
            </button>
          </Link>
 
           <button onClick={handleSubmit} className=" text-white rounded-full w-[120px] border-white border-1 p-2">
               Sign in
          </button>
        
        </div>
      </div>
    </div>
  );
}

export default Login;
