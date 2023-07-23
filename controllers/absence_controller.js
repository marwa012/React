const absenceModel = require("../models/absence_model")

module.exports={
    create:(req,res)=>{

        const absence = new absenceModel(req.body)
        absence.save(req.body,(err,item)=>{
           if(err){
               res.status(406).json({success:false,message:"failed to created absence",data:null})    
               console.log(err)
            }else{
               res.status(201).json({success:true, message:"absence created successfully",data:item})
     
           }
        })
     
         }
        }