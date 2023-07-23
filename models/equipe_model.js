const mongoose = require("mongoose")



const equipeSchema= new mongoose.Schema({
    nom:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    projets: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "projets",
        },
        
      ],
      Managers: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Managers",
        },
        Membres:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Membres",
        }],
        
 
      
},{timestamps:true})

module.exports = mongoose.model("equipes",equipeSchema)