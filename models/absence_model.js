const mongoose = require("mongoose")
const absenceSchema= new mongoose.Schema({
    date_absence:{
        type:String,
        required:true,
        trim:true
    },
    heure_debut_absence:{
        type:String,
        required:true,
        trim:true
    },
    heure_fin_absence:{
        type:String,
        required:true,
        trim:true
    },
    motif:{
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

module.exports = mongoose.model("absence",absenceSchema)
