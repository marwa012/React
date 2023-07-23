const equipeModel = require("../models/equipe_model")
module.exports={
    create:(req,res)=>{
        const equipe = new equipeModel(req.body)
        equipe.save(req.body,(err,item)=>{
           if(err){
               res.status(406).json({success:false,message:"failed to created equipe"+err,data:null})    
               console.log(err)
            }else{
               res.status(201).json({success:true, message:"equipe created successfully",data:item})
     
           }
        })
        
     
         },
         getall: function(req,res){
            equipeModel.find({}).populate("Membres").exec((err,items)=>{
             if(err){
                    res.status(406).json({success:false,message:"cannot got all equipe"+SyntaxError,data:null})    
             }else{
                    res.status(201).json({success:true, message:"list of equipe ",data:items})
             } 
    
            })
    
        },
        delete:(req,res)=>{
            equipeModel.findByIdAndDelete(req.params.id,function(err,item){
                if (err) {
                    res.status(406).json({
                        success:false,
                        message:'can not find equipe for delete',
                        data:null
                    }) ;
                } else {
                    res.status(201).json({
                        success:true,
                        message:'can get delete equipe by this id',
                        data:item
                    }) ;
                }
            })
          } ,
        update:function(req,res){
            equipeModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item) {
                if (err) {
                    res.status(404).json({
                        success: false,
                        message: 'can not get equipe update by id',
                        data: null
                    });
                    console.log(err)
                } else {
                    res.status(201).json({
                        success:true,
                        message:'can get equipe update by id',
                        data:item
                    }) ;
                }
            })
          },
          getbyid:async(req,res)=>{
            try {
                await equipeModel.findById(req.params.id).exec((err,item)=>{
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
        }