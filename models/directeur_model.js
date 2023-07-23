const mongoose = require("mongoose")
const usermodel = require("./user_model")


const directeurSchema = new mongoose.Schema({

   
createdAt: {
    type:Date,
    default:Date.now,
},
updateAt: {
    type:Date,
    default:Date.now,
}


})


const Membres = usermodel.discriminator("Directeurs",directeurSchema)
module.exports = mongoose.model("Directeurs")