const mongoose = require("mongoose")
const reservationSchema= new mongoose.Schema({
    title:{
        type:String,
       
    },
    startdate:{
        type:Date,
       
    },
    enddate:{
        type:Date,
        
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    membre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Membres"
    },
    status:{
        type:String,
        default:"en attente"
    },
},{timestamps:true})

module.exports = mongoose.model("reservation",reservationSchema)