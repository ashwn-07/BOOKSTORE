const express = require("express");
const app = express();
require("dotenv").config();

var cors = require('cors')
app.use(cors())

const dbconncetion = require("./DBconnection/DBconn");
const mongoose = require("mongoose");
const books = require("./Routes/BookRoutes");
const user = require('./Routes/userroutes')
const PORT = process.env.PORT;
const bookModel = require("./Models/BookModel");

app.use("/api", books);
app.use("/api", user)

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
