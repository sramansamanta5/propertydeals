import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-3xl font-bold '>Sign Up</div>
      <div className='p-4 m-5 flex flex-col justify-center items-center'>
      <input placeholder='Enter Username' className='p-2 font-semibold text-2xl w-80 h-16 border-2 border-black border-solid rounded-lg my-2'/>
      <input placeholder='Enter Email' className='p-2 font-semibold text-2xl w-80 h-16 border-2 border-black border-solid rounded-lg my-2'/>
      <input placeholder='Enter Password' className='p-2 font-semibold text-2xl w-80 h-16 border-2 border-black border-solid rounded-lg my-2'/>
      <button className='p-2 bg-green-600 text-white font-semibold rounded-lg my-2'>Sign Up</button>
      <button className='p-2 bg-red-500 text-white font-semibold rounded-lg my-2'>Sign Up with Google</button>
      </div>
     <Link to='/login'><p>Have an Account? login here</p></Link>
    </div>
  )
}

export default Signup