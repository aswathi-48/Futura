const express = require('express')
const app = express()
const mongoose=require('mongoose')
const dotenv= require('dotenv')
const cors = require('cors')


app.use(cors())
dotenv.config()

const UserRouter=require('./Router/userrouter')

mongoose.connect(process.env.mongo).then(()=>{    
console.log('data base are connected');
})


app.use(express.json())
app.use("/apii",UserRouter)

app.listen(7000,()=>{
    console.log("Port 7000 are connected");
})