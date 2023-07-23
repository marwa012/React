const reservationModel = require("../models/reservation_model")
const moment = require("moment")
const mongoose = require("mongoose")
module.exports={
    create:(req,res)=>{
        const reservation = new reservationModel(req.body)
        reservation.save(req.body,(err,item)=>{
           if(err){
               res.status(406).json({success:false,message:"failed to created reservation",data:null})    
               console.log(err)
            }else{
               res.status(201).json({success:true, message:"reservation created successfully",data:item})
     
           }
        })
        
     
         },
         getall: function(req,res){
            reservationModel.find({}).populate("membre").exec((err,items)=>{
             if(err){
                    res.status(406).json({success:false,message:"cannot got all reservation",data:null})    
             }else{
                    res.status(201).json({success:true, message:"list of reservation ",data:items})
             } 
    
            })
    
        },
            getbyid:async(req,res)=>{
                try {
                    await reservationModel.findById(req.params.id).exec((err,item)=>{
                        if(err){
                            res.status(406).json({success:true,message:"failed id",data:null})
                        }else{
                            res.status(200).json({success:true,message:"id with success",data:item})
                        }  
                        
                    }) 
                    } catch (err) {
                        res.status(500).json(err.error)
                        
                    }
                },
                delete:function(req,res){
                    reservationModel.findByIdAndRemove(req.params.id,function(err,item){
                        if(err){
                            res.status(406).json({success:false,message:"failed deleted event by id "+err,data:null}) 
                        }else{
                            res.status(201).json({success:true, message:"event deleted ",data:item})    
                        }   
                    })
                },
                update:function(req,res){
                    reservationModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item) {
                        if (err) {
                            res.status(404).json({
                                success: false,
                                message: 'can not get reservation update',
                                data: null
                            });
                            console.log(err)
                        } else {
                            res.status(201).json({
                                success:true,
                                message:'can get reservation update by id',
                                data:item
                            }) ;
                        }
                    })
                  }, 
                  getbyidmembre:async(req,res)=>{
                    try {
                        await reservationModel.find({membre:mongoose.Types.ObjectId(req.params.id)}).populate("membre").exec((err,item)=>{
                            if(err){
                                res.status(406).json({success:true,message:"failed id",data:null})
                            }else{
                                res.status(201).json({success:true,message:"ur reservation",data:item})
                            }  
                            
                        }) 
                        } catch (err) {
                            res.status(500).json(err.error)
                            
                        }
                    },
      
}