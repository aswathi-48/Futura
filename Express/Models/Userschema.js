    const mongoose=require('mongoose')  //import mongoose 
 
    const Userschemas=new mongoose.Schema({   //create a new variable Userschemas   , .schema describe structure of documents
        // username:{type:String,require:true}  //require:true is user to make this feild compulsory
        FirstName:{type:String},
        SecondName:{type:String},
        Age:{type:String},
        Email:{type:String,unique:true},
        Password:{type:String}, 
        Address:{type:String},
        Phone:{type:String},

    },{timestamps:true})  //to add the date and time the value is added to DB or edited

    module.exports=mongoose.model("users",Userschemas)   //here 'users' is the name of the collection you are creating