const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    category:{type:String},
    type:{type:String},
    title:{type:String},
    description:{type:String},
    price:{type:String},
    Images:{type:String},
     
},{timelaps:true})

module.exports = new mongoose.model("ItemDetailss",ItemSchema)