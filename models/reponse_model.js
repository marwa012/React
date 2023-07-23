const mongoose = require("mongoose")
const reponseSchema= new mongoose.Schema({
    datereponse:{
        type:String,
        required:true,
        trim:true
    },  
    reponse:{
        type:String,
        required:true,
        trim:true
    },
    questions:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"questions"
},
    
},{timestamps:true})

module.exports = mongoose.model("reponses",reponseSchema)