import express from 'express'
import { signup,login,logout,googleAuth } from '../controllers/authController.js';


const router=express.Router();

router.post('/signup',signup)
router.post('/login',login)
router.post('/google',googleAuth)

router.post('/logout',logout)


export default router;