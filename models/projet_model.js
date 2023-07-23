const mongoose = require("mongoose")
const projetSchema= new mongoose.Schema({
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
    date_debut:{
        type:Date,
        required:true,
        trim:true
    },
    date_fin:{
        type:Date,
        required:true,
        trim:true
    },
    taches: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "taches",
        },
      ],
      documents: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "documents",
        },
        
      ],
      Managers:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Managers"
        
},
equipes:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"equipes"
},
   
   
  

},{timestamps:true})

module.exports = mongoose.model("projets",projetSchema)