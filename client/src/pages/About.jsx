import React from 'react'
 import { Button } from '@/components/ui/button'
 import { DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuLabel,DropdownMenuItem,DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
 import { useSelector } from 'react-redux'


const About = () => {

  const {error,loading,currentUser}=useSelector((state)=>state.user)
  return (
    <div>
       <h1>About</h1>
       <Button>Click</Button>
       {console.log(error,loading,currentUser)}
      
    </div>
  )
}

export default About