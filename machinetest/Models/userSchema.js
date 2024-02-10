const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    MovieName:{type:String},
    DirName:{type:String},
    Actor:{type:String},
    Actress:{type:String}
},{timestamps:true})


module.exports= mongoose.model('Movie',UserSchema)