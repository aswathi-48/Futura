const mongoose=require("mongoose")

const Userschema=new mongoose.schema({
    username:{type:String,require:true},
    email:{type:String,require:true},
    password:{type:String,require:true}

})


//hi hello iam aswathik 