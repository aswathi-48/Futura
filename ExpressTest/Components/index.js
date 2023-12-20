const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()


app.use(cors())
dotenv.config()


const userRoute=require('./Router/userrouter')
const Crudupdatedata=require('./Router/Crudupdatedata')
 mongoose.connect(process.env.new_url).then(()=>{
    console.log('data base are connected');
 })

 app.use('/',userRoute)
 app.use('/',CrudRoute)

 app.listen(3000,()=>{
   console.log('server is connected');
 })