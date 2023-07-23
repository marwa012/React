const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const db =process.env.DB_URL
const database=mongoose.connect(db,(err)=>{
    if (!err) {
        console.log("mongodb connect succeful")
        
    } else {
        console.log("failed to connect with mongo db")
    }}
)
module.exports=database