import React from 'react'

function Settings() {
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
              
            ></input>
            <label className="mb-2">E-mail</label>
            <input
              className=" mb-2 w-[400px] rounded-lg p-3 border"
            
            />
            <label className="mb-2">Bio</label>
            <textarea
              className=" mb-2 w-[400px] rounded-lg p-3 border h-[130px]"
   
            />
          </div>
        </form>

        <button className=" bg-blue-900 w-32 text-white p-2 rounded-full mt-3 relative  left-[900px]">
          Update Profile
        </button>
        <h1 className=" text-xl mb-6 font-bold">Settings</h1>

        <form>
          <div className="flex flex-col">
            <label className="mb-2 ">Current Password</label>
            <input
              className=" mb-2 w-[400px] rounded-lg p-3 border"
              type="text"
              placeholder="Enter current Password"
            ></input>
            <label className="mb-2">New Password</label>
            <input
              className=" mb-2 w-[400px] rounded-lg p-3 border"
              placeholder="Enter New password"
            />
            <label className="mb-2">Confirm Password</label>
            <textarea
              className=" mb-2 w-[400px] rounded-lg p-3 border h-[130px]"
              placeholder="Confirm New Pssword"
            />
          </div>
        </form>

        <button className=" bg-blue-900 w-36 text-white p-2 rounded-full mt-3 relative  left-[900px]">
          Save password
        </button>
        
      </div>
    

    </div>
  )
}

export default Settings
