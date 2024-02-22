 const express = require('express')
const app= express()
const dotenv = require('dotenv')
const  mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
dotenv.config()
//admin
const userrouter = require('./Router/Userrouter')
const ItemRouter = require('./Router/Itemrouter')


//user
const UserEcomRouter1 = require('./Router/UserEcomrouter')


//nodmailer

// const appRouter = require('./Controller/appcontroller')

mongoose.connect(process.env.Mongo_url).then(()=>{
    console.log('database are connected');
})

app.use(express.json())

//admin
app.use('/data1',userrouter)
app.use("/data2",ItemRouter)


//user
app.use('/value1',UserEcomRouter1)


//nodemailerrr 

// app.use('/nodemailer',appRouter)


app.listen(5000,()=> {
    console.log('server is connected');
})