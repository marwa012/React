const mongoose = require("mongoose")
const sondaSchema= new mongoose.Schema({
    // questions:[{
    //     question:{ 
    //     type:String,
    //     required:true,
    //     trim:true
    // },
    question:{
        type:String,
        required:true,
        trim:true
    },
    reponse:{
        type:String,
        default:"en attente"
    },
//     },
// ],
    membre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Membres"
    },
   
},{timestamps:true})

module.exports = mongoose.model("Sondas",sondaSchema)