const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()

 mongoose.connect(process.env.new_url).then(()=>{
    console.log('data base are connected');
 })

 app.listen(3000,()=>{
   console.log('server is connected');
 })