const express = require('express')
const router = express.Router()
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
const {verifyJwt} = require('../Middlewares/verifyJWT')
const {createNewBook} =require('../Controllers/bookController')



router.get('/', )
router.post('/add',verifyJwt, createNewBook)
router.put('/updatebooks',verifyJwt)
router.delete('/deletebokos', verifyJwt)



module.exports = router;