const router =require ('express').Router()
 
const {response}=require('express');
const users =require('../ModelsUserschema')
const Crypto = require('crypto-js')
const jwt=require('jsonwebtoken');


router.post('/postmethod',async(req,res)=>{
    console.log('postman data ?', req.body);



const newUser = new users({
    FirstName: req.body.FirstName,
    SecondName: req.body.SecondName,
    Age: req.body.Age,
    Email: req.body.Email,
    Phone:req.body.Phone,
    Password: Crypto.AES.encrypt(req.body.Password, process.env.Crypto_js).toString(),
    Address: req.body.Address,
})

try{
    const savedUser =await newUser.save()
    res.status(200).json(savedUser)
}catch(err){

}
res.status(500).json(err)

})