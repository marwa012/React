const mongoose = require("mongoose")
const tacheSchema= new mongoose.Schema({
    titre:{
        type:String,
        required:true,
        trim:true
    },
    // date_debut:{
    //     type:Date,
    //     required:true,
    //     trim:true
    // },
    // date_fin:{
    //     type:Date,
    //     required:true,
    //     trim:true
    // },
    etat:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    projets:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"projets"
},
membre:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Membres"
}

},{timestamps:true})

module.exports = mongoose.model("taches",tacheSchema)

