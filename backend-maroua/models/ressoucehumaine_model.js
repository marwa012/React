const mongoose = require("mongoose")
const usermodel = require ("./user_model")
const ressourceSchema= new mongoose.Schema({
    

   

    conges:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"conges"
    }],

})
const Ressource = usermodel.discriminator("Ressource",ressourceSchema)
module.exports = mongoose.model("Ressource")