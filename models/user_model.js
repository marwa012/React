const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

saltRounds=10
const baseOptions = {
    discriminatorKey: 'itemtype', // our discriminator key, could be anything
    collection: 'users', // the name of our collection
  };
const UserSchema = new mongoose.Schema({

    firstname:{
    type:String,
    required:true,
    trim:true
},
    lastname:{
        type:String,
        required:true,
    trim:true
    },
    
    email:{
    type:String,
    required:true,
    trim:true

    },
    password:{
        type:String,
        required:true,
        trim:true  ,
    },
    phone:{
        type:String,
        required:true,
        trim:true

    },
    Cin:{
        type:String,
        required:true,
        trim:true
    },
    isManager:{
          type:Boolean,
           default:false
    },
    isRH:{  
        type:Boolean,
        default:false
    },
    image:{
    type:String,

    },

},baseOptions,
{timestamps:true})
// UserSchema.pre("save",(next)=>{
//     if(this.password)
//     this.password = bcrypt.hashSync(this.password,10)
// })
UserSchema.pre("save",function(next){
    this.password= bcrypt.hashSync(this.password,saltRounds)
next()

    
})

module.exports = mongoose.model("Users",UserSchema)