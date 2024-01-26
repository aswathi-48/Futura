const mongoose = require('mongoose')

const Userschemas = new mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Password:{type:String},
    Images:{type:String},

},{timestamps:true})


module.exports=mongoose.model('adminUser',Userschemas)