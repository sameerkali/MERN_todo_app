const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 6969;

mongoose.connect(process.env.MONGODB).then(()=>{
    console.log("mongodb connected")
})



app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
});
