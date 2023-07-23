const PlannificationModel = require("../models/plannification_model") 
const mongoose = require("mongoose")

module.exports={



    
    create:(req,res)=>{
        const plannification = new PlannificationModel(req.body)
        plannification.save(req.body,(err,item)=>{
           if(err){
               res.status(406).json({success:false,message:"failed to created plannification"+err,data:null})    
               console.log(err)
            }else{
               res.status(201).json({success:true, message:"plannification crated successfully",data:item})
     
           }
        })

         },
         getall: function(req,res){
            PlannificationModel.find({}).populate("membre").exec((err,items)=>{
             if(err){
                    res.status(406).json({success:false,message:"cannot got all plannification",data:null})    
             }else{
                    res.status(201).json({success:true, message:"list of plannification ",data:items})
             } 
    
            })
    
        },
        getmyplanni: function(req,res){
            PlannificationModel.find({membres:mongoose.Types.ObjectId(req.params.id)}).populate("membres").exec((err,items)=>{
             if(err){
                    res.status(406).json({success:false,message:"cannot got all plannification"+err,data:null})    
             }else{
                    res.status(201).json({success:true, message:"list of my plannification ",data:items})
             } 
    
            })
    
        },
         

        getById: function(req,res){
            PlannificationModel  .findById(req.params.id,function(err,item){
                if (err) {
                    res.status(404).json({
                        success:false,
                        message:'cannotfind plannification failed',
                        data:null
                    })
                    
                } else {
                    res.status(202).json({
                        success:true,
                        message:'find plannification by id',
                        data:item
                });
            }
        })
    },
    getbyname:function(req,res){
        PlannificationModel  .find({name:req.query.name},function(err,items){
            
        if(err){
            res.status(406).json({success:false,message:"cannot get plannification by name ",data:null}) 
        }else{
            res.status(201).json({success:true, message:"find plannification by name ",data:items})    
        }
        })
    },
    update:function(req,res){

        PlannificationModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
            if(err){
                res.status(406).json({success:false,message:"cannot update",data:null}) 
            }else{
                res.status(201).json({success:true, message:"plannification updated ",data:item})
            }
        })    
        },
          
        delete:function(req,res){
            PlannificationModel .findByIdAndRemove(req.params.id,function(err,item){
                if(err){
                    res.status(406).json({success:false,message:"failed deleted plannification by id ",data:null}) 
                }else{
                    res.status(201).json({success:true, message:"plannification deleted ",data:item})    
                }   
            })
        }
        }


