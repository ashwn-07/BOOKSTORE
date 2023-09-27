const express = require("express");
const app = express();
require("dotenv").config();

var cors = require('cors')
app.use(cors())
const cookieParser = require("cookie-parser")
app.use(cookieParser())
const mongoose = require("mongoose");


const PORT = process.env.PORT;
const auth = require("./Routes/authRoutes")
const user = require('./Routes/userRoutes')
const book = require("./Routes/bookroutes");

app.use("/auth", auth);
app.use("/user", user);
app.use("/books", book)

const connstr = process.env.CONNSTR;
const dbconn = mongoose
    .connect(connstr)

    .then(async () => {
        console.log("connected to db");
        
        app.listen(PORT, () => {
            console.log(`SERVER LISTENING ON PORT ${8000}`);
        });
    })
    .catch((error) => {
        console.log(`error! connecting${error}`);
    });
