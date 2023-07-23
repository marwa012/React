const congeModel = require("../models/conge_model")
const Membremodel = require('../models/membre_model')
const mongoose = require("mongoose")

module.exports={
    create:(req,res)=>{

        const conge = new congeModel(req.body)
        conge.save(req.body,(err,item)=>{
           if(err){
               res.status(406).json({success:false,message:"failed to created conge"+err,data:null})    
               console.log(err)
            }else{
                Membremodel.findByIdAndUpdate(req.body.membre,
                    {$push:{conges:conge}},()=>{
                        res.status(201).json({success:true, message:"conge created successfully",data:item})
                    }
                    )

           }
        })
       
     
         },
        //  accepterdemande:async(req,res)=>{

        //  },
         getbyid:async(req,res)=>{
            try {
                await congeModel.findById(req.params.id).exec((err,item)=>{
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
            getbyidmembre:async(req,res)=>{
                try {
                    await congeModel.find({membre:mongoose.Types.ObjectId(req.params.id)}).populate("membre").exec((err,item)=>{
                        if(err){
                            res.status(406).json({success:true,message:"failed id",data:null})
                        }else{
                            res.status(201).json({success:true,message:"id with success",data:item})
                        }  
                        
                    }) 
                    } catch (err) {
                        res.status(500).json(err.error)
                        
                    }
                },
            getall: function(req,res){
                congeModel.find({}).populate("membre").exec((err,items)=>{
                 if(err){
                        res.status(406).json({success:false,message:"cannot got all conge",data:null})    
                 }else{
                        res.status(201).json({success:true, message:"list of conge ",data:items})
                 } 
        
                })
        
            },
            delete:(req,res)=>{
                congeModel.findByIdAndDelete(req.params.id,function(err,item){
                    if (err) {
                        res.status(406).json({
                            success:false,
                            message:'can not find conge for delete',
                            data:null
                        }) ;
                    } else {
                        res.status(201).json({
                            success:true,
                            message:'can get delete conge by this id',
                            data:item
                        }) ;
                    }
                })
              } ,
              getbyname :async(req,res)=>{
                try {
                  await   congeModel.find({ref:req.query.duree}).exec((err,item)=>{
                      if(err){
                          res.status(406).json({success:true,message:"failed  ",data:null})
                      }else{
                          res.status(200).json({success:true,message:" success",data:item})
                      } 
              
                  })
                } catch (error) {
                    res.status(500).json(error.err)
                    
                }  
              },
              
              update:function(req,res){
                congeModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item) {
                    if (err) {
                        res.status(404).json({
                            success: false,
                            message: 'can not get conge update',
                            data: null
                        });
                        console.log(err)
                    } else {
                        res.status(201).json({
                            success:true,
                            message:'can get conge update by id',
                            data:item
                        }) ;
                    }
                })
              }, 
         
            

        }