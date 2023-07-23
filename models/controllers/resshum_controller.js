const Ressourcemodel = require('../models/ressoucehumaine_model')
const nodemailer = require('nodemailer');
const res = require('express/lib/response');
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "aca29c5cbcce07",
      pass: "765645fb353766"
    }
  });
module.exports={
    register:async(req,res)=>{
        try{
             //req.body.image=req.file.filename
            req.body["image"]=req.file?.filename;
            const ressource = new Ressourcemodel(req.body)
            await ressource.save(req.body,(err,item)=>{
                if(err){
                    res.status(406).json({success:false,message:"failed register"+err,data:null})
                }else{
                    res.status(201).json({success:true,message:" success register",data:item})
                }
            })

        }catch(error){
            res.status(500).json(error)
        }
    },
    // getbyidrh:async(req,res)=>{
    //     try {
    //         await  Ressourcemodel.find({}).exec((err,item)=>{
    //             if(err){
    //                 res.status(406).json({success:true,message:"failed id",data:null})
    //             }else{
    //                 res.status(201).json({success:true,message:"id with success",data:item})
    //             }  
                
    //         }) 
    //         } catch (err) {
    //             res.status(500).json(err.error)
                
    //         }
    //     },
    getall:async(req,res)=>{
        try {
      await Ressourcemodel.find({}).exec((err,items)=>{
            if(err){
                res.status(406).json({success:true,message:"failed getall",data:null})
            }else{
                res.status(200).json({success:true,message:"getall RH with success",data:items})
            }
            
           }) 
        }catch (err) {
            res.status(500).json(error,err)    
        }
    },
    getbyid:async(req,res)=>{
        try {
            await Ressourcemodel.findById(req.params.id).exec((err,item)=>{
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
        getbyname :async(req,res)=>{
            try {
              await Ressourcemodel.find({ref:req.query.firstname}).exec((err,item)=>{
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
            Ressourcemodel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item) {
                if (err) {
                    res.status(404).json({
                        success: false,
                        message: 'can not get membre update by id',
                        data: null
                    });
                    console.log(err)
                } else {
                    res.status(201).json({
                        success:true,
                        message:'can get membre update by id',
                        data:item
                    }) ;
                }
            })
          }, 
          delete:(req,res)=>{
            Ressourcemodel.findByIdAndDelete(req.params.id,function(err,item){
                if (err) {
                    res.status(406).json({
                        success:false,
                        message:'can not find membre for delete',
                        data:null
                    }) ;
                } else {
                    res.status(201).json({
                        success:true,
                        message:'can get delete membre by this name',
                        data:item
                    }) ;
                }
            })
          }   
}