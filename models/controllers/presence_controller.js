const presenceModel = require("../models/presence_model")
module.exports={
    create:(req,res)=>{

        const presence = new presenceModel(req.body)
        presence.save(req.body,(err,item)=>{
           if(err){
               res.status(406).json({success:false,message:"failed to created presence"+err,data:null})    
               console.log(err)
            }else{
               res.status(201).json({success:true, message:"presence created successfully",data:item})
     
           }
        })
     
         },
         getbyid:async(req,res)=>{
            try {
                await presenceModel.findById(req.params.id).exec((err,item)=>{
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
         getall: function(req,res){
            presenceModel.find({}).populate("membre").populate("bureau").exec((err,items)=>{
             if(err){
                    res.status(406).json({success:false,message:"cannot got all bureau",data:null})    
             }else{
                    res.status(201).json({success:true, message:"list of bureau ",data:items})
             } 
    
            })
    
        },
        delete:(req,res)=>{
            presenceModel.findByIdAndDelete(req.params.id,function(err,item){
                if (err) {
                    res.status(406).json({
                        success:false,
                        message:'can not find presence for delete',
                        data:null
                    }) ;
                } else {
                    res.status(201).json({
                        success:true,
                        message:'can get delete presence by this id',
                        data:item
                    }) ;
                }
            })
          } ,
          getbyname :async(req,res)=>{
            try {
              await  presenceModel.find({ref:req.query.Date_pres}).exec((err,item)=>{
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
          updatepresence:function(req,res){
            presenceModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item) {
                if (err) {
                    res.status(404).json({
                        success: false,
                        message: 'can not get presence update by id',
                        data: null
                    });
                    console.log(err)
                } else {
                    res.status(201).json({
                        success:true,
                        message:'can get presence update by id',
                        data:item
                    }) ;
                }
            })
          },  

        
        }