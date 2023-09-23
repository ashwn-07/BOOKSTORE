const express = require("express");
const { syncIndexes } = require("mongoose");
const router = express.Router();
const app = express();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
const Usermodel = require('../Models/UserModel')

router.post('/userSignUp', async(req,res)=>{
    try {
        let user= req.body;
       
      
       
         
                
                   let newUser= await Usermodel(user);
                    newUser.save();
                    res.status(200).json({message:"user saved successfully"});
                    console.log("saved");


                    
} catch (error) {
        res.json(error);
        console.log(error);
    }
   
})


router.post('/login', async (req, res)=>{
try {
    const email = req.body.email;
    const password= req.body.password;
    console.log(password)
    const user =  await Usermodel.findOne({email:email})

    if(user.password===password)
    {
        res.status(200).json({message:"User Login suceesfull"})
    }
    else{
        res.status(400).json({message:"Invalid login"})
    }
} catch (error) {
    console.log(error)
}
    

})

module.exports = router;