import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
function Settings() {
const[username, setUsername]=useState('')
const[email, setEmail]=useState('')
const[bio, setBio]=useState('')
const[profile, setProfile]=useState([])
const[currentPassword, setCurrentPassword]=useState()
const[newPassword, setNewPassword]=useState()
const[confirmPassword , setConfirmPassword]=useState()
const[setting, setSetting]=useState([])

function handleSubmit(){
    const profiler = {
      username: username,
      email: email,
      bio: bio
    }
if (username === "" ||  email === "" ||  bio === '') {
    toast.error("fill the field")
  } else {
     setProfile([...profile, profiler])
      setBio("");
      setEmail("")
      setUsername("")
      toast.success("created sucessfully")
  }
}

function profilehand (){
   const settings ={
    currentPassword : currentPassword,
    newPassword: newPassword,
    confirmPassword: confirmPassword
   }
if (confirmPassword !== newPassword) {
  toast.error("Password incorrect")
}else if(currentPassword === '' || newPassword=== "" || confirmPassword===""  ) {
           toast.error("fill the field")
   }else{
    setSetting([...setting, settings])
    toast.success("created sucessfully")
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
   }



}


  return (
    <div>
      <div className="ml-55 mt-2">
        <h1 className="text-xl mb-6 font-bold">Basic Profile</h1>

        <form>
          <div className="flex flex-col">
            <label className="mb-2 ">Username</label>
            <input
              className=" mb-2 w-[400px] rounded-lg p-3 border"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            >

            </input>
            <label className="mb-2">E-mail</label>
            <input
              className=" mb-2 w-[400px] rounded-lg p-3 border"
               value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="mb-2">Bio</label>
            <textarea
              className=" mb-2 w-[400px] rounded-lg p-3 border h-[130px]"
               value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </form>

        <button onClick={handleSubmit} className=" bg-blue-900 w-32 text-white p-2 rounded-full mt-3 relative  left-[900px]">
          Update Profile
        </button>
        <h1 className=" text-xl mb-6 font-bold">Settings</h1>

        <form>
          <div className="flex flex-col">
            <label className="mb-2 ">Current Password</label>
            <input
              className=" mb-2 w-[400px] rounded-lg p-3 border"
              type="password"
              placeholder="Enter current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            ></input>
            <label className="mb-2">New Password</label>
            <input
             type="password"
              className=" mb-2 w-[400px] rounded-lg p-3 border"
              placeholder="*****"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <label className="mb-2">Confirm Password</label>
           <input
               type="password"
              className=" mb-2 w-[400px] rounded-lg p-3 border"
              placeholder="******"
              value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </form>

        <button onClick={profilehand} className=" bg-blue-900 w-36 text-white p-2 rounded-full mt-3 relative  left-[900px]">
          Save password
        </button>
        
      </div>
    

    </div>
  )
}

export default Settings
