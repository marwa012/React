const Managermodel = require('../models/manager_model')
const nodemailer = require('nodemailer');
const res = require('express/lib/response');
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d88a34436631c5",
      pass: "c07d1ec46988f3"
    }
  });
module.exports={
    register:async(req,res)=>{
        try{
            req.body["image"]=req.file?.filename;
            const manager = new Managermodel(req.body)
            await manager.save(req.body,(err,item)=>{
                console.log(manager)
                if(err){
                    res.status(406).json({success:false,message:"failed register"+err,data:null})
                }else{
                    // transport.sendMail({
                    //     from: "myapp@gmail.com",
                    //     to: item.email,
                    //     cc: 'maroua_touhami@yahoo.com',
                    //     bcc: "maroua_touhami@yahoo.com",
                    //     subject: "Welcome " + item.firstName,
                    //     text: "bonjour mr ",
                    //     html: `<!DOCTYPE html>
                    //     <html>
                    //     <head>
                    //       <meta charset="utf-8">
                    //       <meta http-equiv="x-ua-compatible" content="ie=edge">
                    //       <title>Welcome Email</title>
                    //     </head>
                    //     <body>
                    //       <h2>Hello ${item.FirstName +" "+ item.LastName}! </h2>
                    //       <p>We're glad to have you on board at ${item.email}. </p>
                    //       <p>We're glad to have you on board at it gate</p>
                           
                    //     </body>
                    //     </html>`,
                    // }, function(err, info) {
                    //     if (err) {
                    //         console.log("error:", err)
                    //     } else {
                    //         console.log("Email Send successufly:", info + reponse)
                    //     }
                    // })
                    res.status(201).json({success:true,message:" success register",data:item})
                }
            })

        }catch(error){
            res.status(500).json(error)
        }
    },
    getall:async(req,res)=>{
        try {
      await Managermodel.find({}).exec((err,items)=>{
            if(err){
                res.status(406).json({success:true,message:"failed getall",data:null})
            }else{
                res.status(200).json({success:true,message:"getall with success",data:items})
            }
            
           }) 
        }catch (err) {
            res.status(500).json(error,err)    
        }
    },
    getbyid:async(req,res)=>{
        try {
            await Managermodel.findById(req.params.id).exec((err,item)=>{
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
              await Managermodel.find({ref:req.query.firstname}).exec((err,item)=>{
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
          updatemanager:function(req,res){
            Managermodel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item) {
                if (err) {
                    res.status(404).json({
                        success: false,
                        message: 'failed updated',
                        data: null
                    });
                    console.log(err)
                } else {
                    res.status(201).json({
                        success:true,
                        message:'success update',
                        data:item
                    }) ;
                }
            })
          }, 
          delete:(req,res)=>{
            Managermodel.findByIdAndDelete(req.params.id,function(err,item){
                if (err) {
                    res.status(406).json({
                        success:false,
                        message:'can not find manager for delete',
                        data:null
                    }) ;
                } else {
                    res.status(201).json({
                        success:true,
                        message:'can get delete manager by this id',
                        data:item
                    }) ;
                }
            })
          } 
}