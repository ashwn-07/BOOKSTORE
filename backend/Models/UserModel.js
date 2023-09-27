const  mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    roles:{
        type:[Number],
        default:9745
    }
  
},{timestamps:true})


const Usermodel = mongoose.model('User', UserSchema)


module.exports= Usermodel;