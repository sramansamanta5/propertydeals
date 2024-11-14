import mongoose from "mongoose";


const userSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
  
},{timestamps:true})

  //{timestamps:true}-->to get times of when the user was created

  const User=mongoose.model('User',userSchema)

  export default User;