import React from 'react'
import { GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth'
import { app } from '../firebase.js'
import { useDispatch } from 'react-redux'
import { signInSuccess,signInFailure } from '@/redux/features/userSlice'
import { useNavigate } from 'react-router-dom'

const Oauth = () => {

  const dispatch=useDispatch();

  const navigate=useNavigate()

  
    const handleGoogleClick=async()=>{
        
        try {

          const provider=new GoogleAuthProvider()
          const auth=getAuth(app)

          const result= await signInWithPopup(auth,provider)

          console.log(result)

          const res=await fetch ('/api/auth/google',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL}),
          })

          const data=await res.json()
          dispatch(signInSuccess(data))
          navigate('/')
        } catch (error) {
            console.log('could not sign in with Google',error)
        }
    }

    //button type changed to button fron 'submit by default' as Oauth is inside  the form in both Signup and Login components.

  return (
    <div className='my-2'>
     <button className='bg-red-500 text-white p-3 rounded-lg' onClick={handleGoogleClick} type='button'>Continue with Google</button> 
    </div>
  )
}

export default Oauth