const jwt = require('jsonwebtoken')
require("dotenv").config();

const verifyJwt = async (req, res, next )=>{
    console.log(req.headers.authorization)
       const authHeader = req.headers.Authorization || req.headers.authorization
       console.log(authHeader)
       if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401); //no token: aunauthenticated (401 unauthorised)

       const token = authHeader.split(' ')[1]
       console.log(token)

            jwt.verify( token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) =>{

                if(error) return res.sendStatus(403) // invalid , has autentication but not valid: 403 Forbidden
                req.user = decoded.UserInfo.email;
                req.roles = decoded.UserInfo.roles;
                next();
            }
                
            )

}

module.exports = {verifyJwt};