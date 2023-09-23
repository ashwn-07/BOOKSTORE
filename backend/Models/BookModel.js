const  mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    title:String,
    author:String,
    isbn:String,
    genre:String,
    year:Number,
    bookcover:String,
    random:{
        type:Number,
        default:Math.random()
    },
    Status:{
        type:String,
        default:"Available"
    },
    
},{timestamps:true})


const Bookmodel = mongoose.model('Book', BookSchema)


module.exports= Bookmodel;