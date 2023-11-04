const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()
const userRoute=require('./Router/Userrouter')

mongoose.connect(process.env.Mongo_Url).then(()=>{
    console.log('data base are connected');
})

app.use(express.json())    
 
app.use('/',userRoute)

app.listen(3000,()=>{
    console.log('server is connected');
})