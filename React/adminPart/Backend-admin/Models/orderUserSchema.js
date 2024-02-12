const mongoose = require ('mongoose')

const OrederUserSchema = new mongoose.Schema({
    HouseName:{type:String},
    HouseNo:{type:String},
    Pincode:{type:String},
    Landmark:{type:String},
    city:{type:String}
},{timelaps:true})

module.exports = new mongoose.model("OrderUser",OrederUserSchema)