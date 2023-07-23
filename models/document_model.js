const mongoose = require("mongoose")
const gallerySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
})
const documentSchema= new mongoose.Schema({
    titre:{
        type:String,
        required:true,
        trim:true
    },
    type:{
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
    Galleries:[gallerySchema],
},{timestamps:true})

module.exports = mongoose.model("documents",documentSchema)