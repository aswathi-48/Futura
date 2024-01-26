const express = require('express')
const app=express()
const dotenv=require('dotenv') 
const mongoose=require('mongoose')
const cors = require('cors')

app.use(cors())
dotenv.config()


const userRouter = require ('./Router/Userrouter')

mongoose.connect(process.env.Mongo_Url).then(()=>{
    console.log('database are connected');
})
app.use(express.json())    

app.use('/api',userRouter)

app.listen(5000,()=>{
    console.log('server connected');
})