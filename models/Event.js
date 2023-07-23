const mongoose = require("mongoose")
const EventSchema= new mongoose.Schema({
 start:Date,
 end:Date,
 title:String,
 membre:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Membres"
},
})



module.exports = mongoose.model("Event",EventSchema)
