import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import About from './pages/About'
import Profile from './pages/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
       
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>
     
     </BrowserRouter>
      
    </>
  )
}

export default App