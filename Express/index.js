const express=require('express')    //This line imports the Express.js library, allowing you to create and configure a web application using Express.
const app=express()                   //This line creates an instance of the Express application, which is used to define routes, middleware, and handle HTTP requests and responses.
const dotenv=require('dotenv')      //This line imports the dotenv library, which is used for loading environment variables 
const mongoose=require('mongoose')
const cors=require('cors')
app.use(cors())
dotenv.config()                   //This line invokes the config() method provided by the dotenv library, which loads the environment variables defined in a .env file into process.env

const userRoute=require('./Router/Userrouter')   //This line imports a user-defined module named Userrouter from the Router directory. This is presumably a custom route module that defines and handles routes related to user management.

const CrudRoute=require('./Router/Crudupdatedata')
mongoose.connect(process.env.Mongo_Url).then(()=>{    //mongoose is the Mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js.    
                                                     //mongoose.connect() is a method provided by Mongoose to establish a connection to a MongoDB database.  .then=> This part of the code is using a Promise-based approach to handle the asynchronous nature of the mongoose.connect() method
    console.log('data base are connected');
})

app.use(express.json())    
 
app.use('/',userRoute)
app.use('/',CrudRoute)

app.listen(3000,()=>{                          // .listen(3000, ...) is a method used to start a web server and make it listen for incoming connections on a specific port. In this case, it's listening on port 3000.
    console.log('server is connected');
})

//http://localhost:3000/postmethod
//http://localhost:3000/delete

