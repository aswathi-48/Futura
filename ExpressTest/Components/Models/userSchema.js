const mongoose=require("mongoose")

const Userschema=new mongoose.schema({
    FirstName:{type:String},
        SecondName:{type:String},
        Age:{type:String},
        Email:{type:String,unique:true},
        Password:{type:String}, 
        Address:{type:String},
        Phone:{type:String},
        
},{timestamps:true})

module.exports=mongoose.model("users",Userschema)


