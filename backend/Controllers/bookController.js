const express = require("express");
const app = express();
const bookModel = require("../Models/BookModel");


const createNewBook = async (req, res)=>{
 
   
try {
    const {title, author, isbn, genre, year, bookcover } = req.body
    
    if(!(title && author && isbn && genre && year && bookcover)) return res.status(400).json({message:"Insufficent Data"})
            
            const book = req.body;
    
            await bookModel(book).save();
    
            res.status(200).json({ message: "Book added successfully!!" });


    
        } catch (error) {
            res.status(500).json({ message: "Server error" });
            console.error(error);
        }
    
}


module.exports= { createNewBook}