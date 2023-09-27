const express = require("express");
const router = express.Router();
const app = express();
const bcrypt = require('bcrypt')
const Usermodel = require("../Models/UserModel");


//signUP
//public
 const signUp = async (req, res) => {
    try {
        let { name, email, password, phone } = req.body;

        // Confirm data
        if (!email || !name || !password || !phone) {
            return res.status(400).json({ message: "All fields are required" });
        }
         
        //check for duplicte username
        const duplicate = await Usermodel.findOne({ email }).lean().exec();

        if (duplicate) {
            return res.status(409).json({ message: "Duplicate username" });
        }

        // Hash password
        const hashedPwd = await bcrypt.hash(password, 10);
        const user = {name, email, password:hashedPwd, phone}
        let newUser= await Usermodel(user);
        newUser.save();
        
        res.json({message:"Registration Successfull"});
        

    } catch (error) {
        res.status(500).json({ message: "Server error" });
        console.error(error);
    }
};

module.exports = { signUp };
