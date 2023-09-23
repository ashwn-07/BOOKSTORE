const express = require("express");
const { syncIndexes } = require("mongoose");
const router = express.Router();
const app = express();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
const bookModel = require("../Models/BookModel");
const {allbooksid} = require('../Middlewares/getallrec')

router.post("/addbooks", async (req, res) => {
    try {
        const book = req.body;

        await bookModel(book).save();

        res.status(200).json({ message: "Book added successfully!!" });

    } catch (error) {
        res.status(400).json({ message: "Server error" });
        console.log(error);
    }
});

router.get("/books", async (req, res) => {
    try {
        const book = req.body;

      const data =   await bookModel.find({})

        res.status(200).json({ message: "Book added successfully!!" });
        
    } catch (error) {
        res.status(400).json({ message: "Server error" });
        console.log(error);
    }
});


router.get("/randombooks", async (req, res) => {
    try {
        
        const booksid = await allbooksid();
             
       const data= await bookModel.find({random:{$gte:Math.random()}})
        for(i=0;i<=booksid.length-1;i++)
        {
          const data = await bookModel.findByIdAndUpdate({_id:booksid[i]._id},{$set:{random:Math.random()}});
        }

        res.status(200).json({ message: data });
        
    } catch (error) {
        res.status(400).json({ message: "Server error" });
        console.log(error);
    }
});

module.exports = router;
