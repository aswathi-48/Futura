const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()

mongoose.connect(process.env.Mongo_ Url).then(()=>{
    console.log('data base are connected');
})

app.listen(3000,()=>{
    console.log('server is connected');
})