
import React, { useState } from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuLabel,DropdownMenuItem,DropdownMenuSeparator } from '@/components/ui/dropdown-menu'

import { useSelector } from 'react-redux';


const Navbar = () => {
   
  
   const {currentUser}=useSelector((state)=>state.user)

  return (
    <>
    <div className='p-4 bg-zinc-900 text-white flex flex-row justify-between items-center'>

    <Link to='/'><div className='flex flex-row gap-1 items-center'><h1 className='font-bold text-2xl'>DreamHome </h1><IoHomeSharp size={30} fill='orange'/></div></Link>
    
     <form className='w-1/2 flex flex-row justify-center items-center gap-1'>
     <input type='text' placeholder='Search here.....' className='h-8 w-1/2 rounded-lg font-bold text-black p-3' />
     <button className='p-2 rounded-lg border-2 border-solid border-red-500 hover:bg-red-500'><FaSearch size={15}/></button> 
     </form>
     {console.log(currentUser)}
     <div  className='flex flex-row gap-4 items-center text-2xl'>
        <MdSunny size={35}/>
         <Link to='/about'><h1>About</h1></Link>
         <DropdownMenu>
           <DropdownMenuTrigger>{currentUser?<img src={currentUser.avatar} className='h-8 w-8 rounded-full object-cover '/>:<IoPerson size={35}/>}</DropdownMenuTrigger>
              <DropdownMenuContent>
               <DropdownMenuLabel>{currentUser?currentUser.username:'Guest'}</DropdownMenuLabel>
               <DropdownMenuSeparator />
               <DropdownMenuItem>Profile</DropdownMenuItem>
               <DropdownMenuItem>Sign-Up</DropdownMenuItem>
               <DropdownMenuItem>Login</DropdownMenuItem>
               <DropdownMenuItem></DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
     </div>
     
    </div>
   
 </>
  )
}

export default Navbar
// 
/*
   <div className='flex flex-row-reverse relative right-2 p-3 ' style={!toggle?{visibility:'hidden'}:{visibility:'visible'}}>
         <div >
           <Link to='/sign-up'><h1>Sign Up</h1></Link>
            <Link to='/sign-in'><h1>Log In</h1></Link> 
         </div>
     </div>

*/