// const mongoose =require("mongoose");

// const ConnectDB =async()=>{
//  try{
//     mongoose.set('strictQuery',false);
//     const connectt =await mongoose.connect(process.env.Mongo_Url);
//     console.log(`Database Connected ${connectt.connection.host}`);
//  }catch(err){
//     console.log(err);
//     process.exit(1)
//  }
// }

// module.exports=ConnectDB