import React from 'react'
import { useSelector } from 'react-redux'
import { CgDanger } from "react-icons/cg";

const Profile = () => {

  const {currentUser}=useSelector((state)=>state.user)

  return (
    <div className='m-5 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold '>PROFILE</h1>
       <img src={currentUser.avatar} className='rounded-full h-24 w-24 object-cover my-3'/>
       <form className='my-2 flex flex-col gap-2 justify-center items-center'>
       <input className='p-2 w-full h-8 border-2 border-black border-solid rounded-lg' id='username' placeholder='username'/>
       <input className='p-2 w-full h-8 border-2 border-black border-solid rounded-lg' id='email' placeholder='email'/>
       <input className='p-2 w-full h-8 border-2 border-black border-solid rounded-lg' id='password' placeholder='password'/>
       <button className='p-3 bg-violet-500 text-white font-semibold rounded-lg'>Update</button>
       </form>
       <div className='flex flex-row gap-2 justify-center items-center'>
        <CgDanger color='red'size={30}/>
        <button className='bg-red-500 text-white p-3 ' >Delete Account</button>
        <CgDanger color='red' size={30}/></div>
        <h1 className='text-red-700 font-bold text-xl' >Sign out</h1>
    </div>
  )
}

export default Profile