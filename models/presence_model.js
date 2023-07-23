const mongoose = require("mongoose")
const presenceSchema= new mongoose.Schema({
    Date_pres:{
        type:String,
       
    },
    Date_insert:{
        type:String,
       
    },

    choix_pres:[{
        choix:{
        type:String,
        }
    }],
  
    placeDisponible:{
        type:String,
       
        
    },
    bureau:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"bureau"
    
    },
    Managers:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Managers"
},
membre:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Membres"
},

},{timestamps:true})

module.exports = mongoose.model("presence",presenceSchema)
