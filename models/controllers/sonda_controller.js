const sondaModel = require("../models/sonda_model")
const Membremodel = require('../models/membre_model')
const mongoose = require("mongoose")
module.exports={
    create:(req,res)=>{
        const sonda = new sondaModel(req.body)
        sonda.save(req.body,(err,item)=>{
           if(err){
               res.status(406).json({success:false,message:"failed to created sondage"+err,data:null})    
               console.log(err)
            }else{
               res.status(201).json({success:true, message:"sondage created successfully"+err,data:item})
     
           }
        })
        
     
         },
         getall: function(req,res){
            sondaModel.find({},(err,items)=>{
             if(err){
                    res.status(406).json({success:false,message:"cannot got all sondage"+err,data:null})    
             }else{
                    res.status(201).json({success:true, message:"list of sondage ",data:items})
             } 
    
            })
    
        },
        getbyid: async(req,res)=>{
            try {
                await sondaModel.findById(req.params.id).exec((err,item)=>{
            
                    if(err){
                        res.status(406).json({success:false,message:"failed creation ",data:null})
                    }else{
            
                        res.status(201).json({success:true,message:"created with success",data:item})
                    } 
            
                })
                
            } catch (err) {
                res.status(500).json(err.error)  
            }
            },
            delete:(req,res)=>{
                sondaModel.findByIdAndDelete(req.params.id,function(err,item){
                    if (err) {
                        res.status(406).json({
                            success:false,
                            message:'can not find sonda for delete',
                            data:null
                        }) ;
                    } else {
                        res.status(201).json({
                            success:true,
                            message:'can get delete sonda by this id',
                            data:item
                        }) ;
                    }
                })
              } ,
              update:function(req,res){
                sondaModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item) {
                    if (err) {
                        res.status(404).json({
                            success: false,
                            message: 'can not get sondage update',
                            data: null
                        });
                        console.log(err)
                    } else {
                        res.status(201).json({
                            success:true,
                            message:'can get sondage update by id',
                            data:item
                        }) ;
                    }
                })
              }, 






}