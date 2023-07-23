const mongoose = require("mongoose")
const congeSchema= new mongoose.Schema({
    duree:{
        type:String,
        required:true,
        trim:true
    },
    date_debut:{
        type:String,
        required:true,
        trim:true
    },
    date_fin:{
        type:String,
        required:true,
        trim:true
    },
    raison:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
        default:"en attente"
    },
   
    membre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Membres"
},

Ressource:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Ressource"
},

},{timestamps:true})

module.exports = mongoose.model("conges",congeSchema)
