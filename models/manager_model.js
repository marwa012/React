const mongoose = require("mongoose")
const usermodel = require("./user_model")


const managerSchema = new mongoose.Schema({

    
createdAt: {
    type:Date,
    default:Date.now,
},
updateAt: {
    type:Date,
    default:Date.now,
},


presences:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"presence"
}],
equipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "equipes",
    },
    
  ],


})


const Managers = usermodel.discriminator("Managers",managerSchema)
module.exports = mongoose.model("Managers")