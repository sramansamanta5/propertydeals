import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInSuccess,signInFailure,signInStart } from '@/redux/features/userSlice.js'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Oauth from '@/components/Oauth'

const Login = () => {


  const [formdata,setFormdata]=useState({})
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {error,loading}=useSelector((state)=>state.user)


  const handleChange=(e)=>{
    setFormdata({...formdata,[e.target.id]:e.target.value})

    console.log(formdata)
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();

    try {

      dispatch(signInStart());

    const res=await fetch ('http://localhost:4000/api/auth/login',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(formdata),
    })
    const data=await res.json();
    if(data.success===false){
      dispatch(signInFailure())
      return;
    }
    dispatch(signInSuccess(data))
    navigate('/')
    console.log(data)
      
    } catch (error) {
     dispatch(signInFailure(error.message))
    }
    
  }

  return (
    
    <div className='flex flex-col justify-center items-center'>
    <div className='text-3xl font-bold '>Login</div>
    <form className='p-4 m-5 flex flex-col justify-center items-center' onSubmit={handleSubmit}>
    <input id='email' type='text'placeholder='Enter Email' className='p-2 font-semibold text-2xl w-80 h-16 border-2 border-black border-solid rounded-lg my-2' onChange={handleChange}/>
    <input id='password' type='text'placeholder='Enter Password' className='p-2 font-semibold text-2xl w-80 h-16 border-2 border-black border-solid rounded-lg my-2' onChange={handleChange}/>
    <button className='p-2 bg-green-600 text-white font-semibold rounded-lg my-2' disabled={loading}>{loading?'Loading...':'Login'}</button>

    <Oauth/>
    
    </form>
    {error && <p className='text-red-500 font-semibold text-xl'>{error}</p>}
   
   <Link to='/sign-up'><p>Don't Have an Account? Sign up here</p></Link>
  </div>
    
  )
}

export default Login