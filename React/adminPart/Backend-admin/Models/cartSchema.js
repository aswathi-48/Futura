const mongoose =require('mongoose')

const CartSchema = new mongoose.Schema({
    itemName:{type:String},
    itemPrice:{type:String},
    // itemDes:{type:String}, 
    itemQuantity:{type:Number},
    itemImage:{type:String},
    orderId:{type:String}
},{timelaps:true})

module.exports = new mongoose.model("cartDetails",CartSchema)