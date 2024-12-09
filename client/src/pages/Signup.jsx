import Oauth from '@/components/Oauth'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  
  const [formdata,setFormdata]=useState({})
  const[error,setError]=useState(null)
  const[loading,setLoading]=useState(false)
  const navigate=useNavigate()


  const handleChange=(e)=>{
    setFormdata({...formdata,[e.target.id]:e.target.value})

    console.log(formdata)
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();

    try {

      setLoading(true)
    const res=await fetch ('http://localhost:4000/api/auth/signup',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(formdata),
    })
    const data=await res.json();
    if(data.success===false){
      setError(data.message)
      setLoading(false)
      return;
    }
    setLoading(false)
    setError(null)
    navigate('/login')
    console.log(data)
      
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
    
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='text-3xl font-bold '>Sign Up</div>
      <form className='p-4 m-5 flex flex-col justify-center items-center' onSubmit={handleSubmit}>
      <input id='username' type='text' placeholder='Enter Username' className='p-2 font-semibold text-2xl w-80 h-16 border-2 border-black border-solid rounded-lg my-2' onChange={handleChange}/>
      <input id='email' type='text'placeholder='Enter Email' className='p-2 font-semibold text-2xl w-80 h-16 border-2 border-black border-solid rounded-lg my-2' onChange={handleChange}/>
      <input id='password' type='text'placeholder='Enter Password' className='p-2 font-semibold text-2xl w-80 h-16 border-2 border-black border-solid rounded-lg my-2' onChange={handleChange}/>
      <button className='p-2 bg-green-600 text-white font-semibold rounded-lg my-2' disabled={loading}>{loading?'Loading...':'Sign Up'}</button>

      <Oauth/>
      
      </form>
      {error && <p className='text-red-500 font-semibold text-xl'>{error}</p>}
     
     <Link to='/login'><p>Have an Account? login here</p></Link>
    </div>
  )
}

export default Signup