const router=require('express').Router()

const users=require('../Models/Userschema')

router.post('/postmethod',async(req,res)=>{
    console.log('postman data ?',req.body);
    const newUser=new users(req.body)
    try{
        const savedUser=await newUser.save()
        res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports=router     
 