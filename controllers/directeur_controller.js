const Directeurmodel = require('../models/directeur_model')

module.exports={
    register:async(req,res)=>{
        try{
            const directeur = new Directeurmodel(req.body)
            await directeur.save(req.body,(err,item)=>{
                if(err){
                    res.status(406).json({success:false,message:"failed  remove ",data:null})
                }else{
                    res.status(201).json({success:true,message:" success remove",data:item})
                }
            })

        }catch(error){
            res.status(500).json(error)
        }
    }}