import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken'


//Sign Up functionality
export const signup=async(req,res,next)=>{
  
    const { username,email,password }=req.body;

    const hashedpassword=bcryptjs.hashSync(password,10)

    const newUser= new User({ username,email,password:hashedpassword })

    try {
       
        await newUser.save();
         res.status(201).json('User Created Successfully')

    } catch (error) {
       next(error)
      // next(errorHandler(550,'error from the function'))     ----->  Custom error handler for specific cases.
    }
   
}

//Login functionality
export const login=async(req,res,next)=>{
  
    const { email,password }=req.body;

    try {
       
        const validUser=await User.findOne({email})

        if(!validUser){
            return next(errorHandler(404,'User not found!'));
        }
         const validPassword=bcryptjs.compareSync(password,validUser.password)
         if(!validPassword){
            return next(errorHandler(404,'Wromg credentials!'));
        }
      
     const token=jwt.sign({id:validUser._id,},process.env.JWT_SECRET)

     const {password:pass,...rest}=validUser._doc;  //To prevent sending password in json response. 
      
     res.cookie('access_token',token,{httpOnly:true,expires:new Date(Date.now()+24*60*60*1000)}).status(200).json(rest) //sending the rest except password.

    } catch (error) {
       next(error)
      // next(errorHandler(550,'error from the function'))     ----->  Custom error handler for specific cases.
    }

   

   
}


// Logout functionality
export const logout = async (req, res, next) => {
    try {
      // Clear the cookie by setting it to a past date
      res.cookie('access_token', '', {
        httpOnly: true,
        expires: new Date(0)  // Set the cookie's expiration date to the past
      }).status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      next(error); // Handle any errors that might occur
    }
  };



  //Google Log in

  export const googleAuth=async(req,res,next)=>{

    try {
      
      const validUser=await User.findOne({email: req.body.email })

      if(validUser){
        
     const token=jwt.sign({id:validUser._id,},process.env.JWT_SECRET)

     const {password:pass,...rest}=validUser._doc;  //To prevent sending password in json response. 
      
     res.cookie('access_token',token,{httpOnly:true,expires:new Date(Date.now()+24*60*60*1000)}).status(200).json(rest) //sending the rest except password.

      }else{
           
        const generatedPassword=Math.random.toString().slice(-8)+Math.random.toString().slice(-8)
        const hashedPassword=bcryptjs.hashSync(generatedPassword,10)
        const newUser=new User({username:req.body.name.split("").join("").toLowerCase()+ Math.random.toString().slice(-4),email:req.body.email,password:hashedPassword,avatar:req.body.photo})

        await newUser.save();
        const token=jwt.sign({id:newUser._id,},process.env.JWT_SECRET)

        const {password:pass,...rest}=newUser._doc;  //To prevent sending password in json response. 

        res.cookie('access_token',token,{httpOnly:true,expires:new Date(Date.now()+24*60*60*1000)}).status(200).json(rest) //sending the rest except password.
      }


    } catch (error) {
      next(error)
    }
  }