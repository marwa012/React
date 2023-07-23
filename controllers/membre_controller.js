
const Membremodel = require('../models/membre_model')
const nodemailer = require('nodemailer');
const res = require('express/lib/response');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9a227973ef3c25",
      pass: "c0694a925bdcc4"
    }
  });


module.exports={
    register:async(req,res)=>{
        try{
            req.body["image"]=req.file?.filename;
            const membre = new Membremodel(req.body)
            await membre.save(req.body,(err,item)=>{
                if(err){
                    res.status(406).json({success:false,message:"failed register"+err,data:null})
                }else{
                    transport.sendMail({
                        from: "myapp@gmail.com",
                        to: item.email,
                        cc: 'maroua.touhami1@gmail.com',
                        bcc: "maroua.touhami1@gmail.com",
                        subject: "Welcome " + item.firstName,
                        text: "bonjour mr ",
                        html: `<!DOCTYPE html>
                        <html>
                        <head>
                          <meta charset="utf-8">
                          <meta http-equiv="x-ua-compatible" content="ie=edge">
                          <title>Welcome Email</title>
                        </head>
                        <body>
                          <h2>Hello ${item.FirstName +" "+ item.LastName}! </h2>
                          <p>We're glad to have you on board at ${item.email}. </p>
                          <p>We're glad to have you on board at it gate</p>
                           
                        </body>
                        </html>`,
                    }, function(err, info) {
                        if (err) {
                            console.log("error:", err)
                        } else {
                            console.log("Email Send successufly:", info + reponse)
                        }
                    })
                    res.status(201).json({success:true,message:" success remove",data:item})
                }
            })

        }catch(error){
            res.status(500).json(error)
        }
    },
    getall:async(req,res)=>{
        try {
      await Membremodel.find({}).exec((err,items)=>{
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
            await Membremodel.findById(req.params.id).exec((err,item)=>{
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
              await Membremodel.find({ref:req.query.firstname}).exec((err,item)=>{
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
          updatemembre:function(req,res){
            Membremodel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item) {
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
            Membremodel.findByIdAndDelete(req.params.id,function(err,item){
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
          }   ,
        
     getstates:async(req,res)=>{
         const date = new Date()
         const lastYear = new Date(date.setFullYear(date.getFullYear()-1))
     
         try{
         const data = await Membremodel.aggregate([
         {$match:{createdAt:{$gte:lastYear}}},
         {$project:{month:{$month:"$createdAt"}}},
         {$group:{_id:"$month", Total:{$sum:1}}}
         ])
         res.status(201).json(data)
     } catch (error){
         res.status(500).json(error)
     }
      
    },
    // update:function(req,res){

    //     Membremodel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
    //         if(err){
    //             res.status(406).json({success:false,message:"cannot update",data:null}) 
    //         }else{
    //             res.status(201).json({success:true, message:"bureau updated ",data:item})
    //         }
    //     })    
    //     },
        // delete: async(req,res)=>{
        //     try {
        //         await  Membremode.findByIdAndDelete(req.params.id).exec((err,item)=>{
        //             if(err){
        //                 res.status(406).json({success:false,message:"failed  remove ",data:null})
        //             }else{
        //                 res.status(201).json({success:true,message:" success remove",data:item})
        //             }
        //         })    
                
        //     } catch (error) {
        //         res.status(500).json(error.err)
        //     }
        
        // }
    
}