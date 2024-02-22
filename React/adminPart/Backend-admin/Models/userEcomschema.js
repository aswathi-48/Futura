const mongoose = require('mongoose')

const UseeSchema = new mongoose.Schema({
     Name:{type:String},
     Email:{type:String},
     Password:{type:String},
     Images:{type:String},
     Adderess:{type:String},
     LandMark:{type:String},
     pincode:{type:String},
     phone:{type:String}
},{timestamps:true})

module.exports = mongoose.model("RegUsers",UseeSchema)