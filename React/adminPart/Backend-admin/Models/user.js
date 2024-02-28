const mongoose=require('mongoose')
const UserSchemaa=new mongoose.Schema({
    Email: {
        type:String,
        required:true,
        unique:false
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
module.exports=mongoose.model('forgotpass',UserSchemaa)