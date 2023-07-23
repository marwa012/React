const mongoose = require("mongoose")
const usermodel = require("./user_model")


const membreSchema = new mongoose.Schema({

  
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
reservation:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"reservation"
}],
plannifications:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"plannifications"
}],
conges:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"conges"
}],
taches:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"taches"
}],
Event:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Event"
}],

Bureau:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Bureau"
},
equipe:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"equipes"
},
isMembre :{  type:Boolean,
    default:false
    },
})


const Membres = usermodel.discriminator("Membres",membreSchema)
module.exports = mongoose.model("Membres")