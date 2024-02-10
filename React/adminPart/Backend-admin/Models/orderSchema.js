const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    title:{type:String},
    price:{type:String},
    Images:{type:String},
    

},{timelaps:true})

module.exports = new mongoose.model("OrderDetails",OrderSchema)