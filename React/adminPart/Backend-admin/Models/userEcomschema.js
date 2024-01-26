const mongoose = require('mongoose')

const UseeSchema = new mongoose.Schema({
     Name:{type:String},
     Email:{type:String},
     Password:{type:String}
},{timestamps:true})

module.exports = mongoose.model("RegUsers",UseeSchema)