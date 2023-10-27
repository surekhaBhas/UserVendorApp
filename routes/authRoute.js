const express=require('express');
const router=express.Router()
const {registerController,
    loginController,}=require('../controllers/authController')
const {requireSignIn,isVendor}=require('../middlewares/authMiddleware')

router.post('/register',registerController)
router.post('/login',loginController)

router.get('/test',requireSignIn,isVendor,(req,res)=>{
    res.send('test')
})
module.exports =router