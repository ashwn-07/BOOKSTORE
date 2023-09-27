const express = require("express");
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
const {signUp} = require("../Controllers/userController")

router.post('/signUp', signUp )











module.exports = router;