import React from 'react'

const Logout = () => {

   const logout=()=>{

   }

  return (
    <div>
        <h1 className='text-2xl font-bold'>You Sure want to Log Out?</h1>
        <button className='bg-red-500 text-white' onSubmit={logout}>LogOut</button>
    </div>
  )
}

export default Logout