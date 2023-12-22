const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    email: {
        type:String,
        required:true,
    },
    otp: {
        type:String,
        require:true,
    },
    otpExpiration:{
        type:Date,
        required:true,
    },
})
module.exports=mongoose.model('NodeMailer',UserSchema)