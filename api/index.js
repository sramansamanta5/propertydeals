import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/userRoutes.js'



dotenv.config();
const app=express();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("database is connected.")})
.catch((err)=>{console.log(err)})

app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("Home page")
})

app.listen(4000,()=>{
    console.log('App is up and running...')
})
