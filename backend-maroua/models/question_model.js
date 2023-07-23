const mongoose = require("mongoose")
const questionSchema= new mongoose.Schema({
    titre:{
        type:String,
        required:true,
        trim:true
    },
    reponses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "reponses",
        },
        
      ],
      items: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "items",
        },
        
      ],
    
},{timestamps:true})

module.exports = mongoose.model("questions",questionSchema)