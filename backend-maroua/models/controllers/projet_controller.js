const projetModel = require("../models/projet_model")
module.exports={
    create:(req,res)=>{

        const projet = new projetModel(req.body)
        projet.save(req.body,(err,item)=>{
           if(err){
               res.status(406).json({success:false,message:"failed to created projet",data:null})    
               console.log(err)
            }else{
               res.status(201).json({success:true, message:"projet crated successfully",data:item})
     
           }
        })
     
         },
         getall: function(req,res){
            projetModel.find({},(err,items)=>{
             if(err){
                    res.status(406).json({success:false,message:"cannot got all projet",data:null})    
             }else{
                    res.status(201).json({success:true, message:"list of projet ",data:items})
             } 
    
            })
    
        },
        update:function(req,res){
            projetModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item) {
                if (err) {
                    res.status(404).json({
                        success: false,
                        message: 'can not get projet update by id',
                        data: null
                    });
                    console.log(err)
                } else {
                    res.status(201).json({
                        success:true,
                        message:'can get projet update by id',
                        data:item
                    }) ;
                }
            })
          }, 
          delete:(req,res)=>{
            projetModel.findByIdAndDelete(req.params.id,function(err,item){
                if (err) {
                    res.status(406).json({
                        success:false,
                        message:'can not find projet for delete',
                        data:null
                    }) ;
                } else {
                    res.status(201).json({
                        success:true,
                        message:'can get delete projet by this id',
                        data:item
                    }) ;
                }
            })
          } ,
          getbyname:async(req,res)=>{
            try {
              await  projetModel.find({ref:req.query.titre}).exec((err,item)=>{
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
          getbyid:async(req,res)=>{
            try {
                await projetModel.findById(req.params.id).exec((err,item)=>{
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
            update:function(req,res){
                projetModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item) {
                    if (err) {
                        res.status(404).json({
                            success: false,
                            message: 'can not get projet update by id',
                            data: null
                        });
                        console.log(err)
                    } else {
                        res.status(201).json({
                            success:true,
                            message:'can get projet update by id',
                            data:item
                        }) ;
                    }
                })
              },
        }