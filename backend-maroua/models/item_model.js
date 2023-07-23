const mongoose = require("mongoose")
const itemSchema= new mongoose.Schema({
    option_name:{
        type:String,
        required:true,
        trim:true
    },
  
   
  

},{timestamps:true})

module.exports = mongoose.model("items",itemSchema)