const mongoose = require("mongoose")
const bureauSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },

    capacite:{
        type:Number,
        required:true,
        trim:true
    },
    pourcentagePresence:{
        type:String,
      
    },
    placeDisponible:{
        type:Number,
        required:true,
        trim:true
    },
 
    presences:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"presence"
    }],
  
},{timestamps:true})

module.exports = mongoose.model("bureau",bureauSchema)