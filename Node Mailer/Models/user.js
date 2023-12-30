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


    // password:{
    //     type:String,
    //     required:true,
    // },
    // varified:{
    //     type:Boolean,
    //     default:false,
    // }  
    
    

})
module.exports=mongoose.model('NodeMailer',UserSchema)