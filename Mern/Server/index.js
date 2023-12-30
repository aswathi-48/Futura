const express =require('express')
const app = express()
const cors = require("cors")
require("dotenv").config()
// const ConnectDB =require("./ConnectDB")
const mongoose=require('mongoose')
const Book=require('./models/Books')

mongoose.connect(process.env.Mongo_Url).then(()=>{
    console.log('data base are connected');
})
// const PORT =process.env.PORT || 7000;

// ConnectDB();
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())




app.get("/api/books",async(req, res)=>{
   try{
    const data =await Book.find({});
    res.json(data)
   }catch(error){
    res.status(500).json({error:"An error occured"})
   }
});


app.get("/",(req, res)=>{
    res.json("Hello Mern!");
});

// app.listen(PORT,()=>{
//     console.log(`server is running on port :${PORT}`);
// })
app.listen(7000,()=>{
    console.log('server is connected');
})