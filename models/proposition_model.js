const mongoose = require("mongoose")
const propositionSchema= new mongoose.Schema({
    titre:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
},{timestamps:true})

module.exports = mongoose.model("propositions",propositionSchema)