import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'
import authRouter from './routes/authRoutes.js'



dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("database is connected.")})
.catch((err)=>{console.log(err)})

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)

//Middleware for handling errors....
app.use((err,req,res,next)=>{
    const statuscode=err.statuscode || 500;
    const message=err.message || "Internal server error";
    return res.status(statuscode).json({
        success:false,
        statuscode,
        message
    })

})

app.get('/',(req,res)=>{
    res.send("Home page")
})

app.listen(4000,()=>{
    console.log('App is up and running...')
})
