const mongoose = require("mongoose")

const PlannificationSchema = new mongoose.Schema({

typeplanni:{
    type:String,
    required:true,
    trim:true
},
status:{
    type:String,
    default: "en attente"
},
raison:{
    type:String,
    required:true
},

chefs:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Chefs"
},
membre:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Membres"
}

},{timestamps:true})

module.exports = mongoose.model("Plannifications",PlannificationSchema)