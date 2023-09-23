const BookModel = require('../Models/BookModel')


const allbooksid = async ()=>{

    const record = await BookModel.find({},{_id:1})

    return record

}


module.exports= {allbooksid};