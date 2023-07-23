const Event = require("../models/Event")
const moment = require("moment")
module.exports={
    // create:(req,res)=>{
        
    //  const event = new Event(req,body);
    //   event.save(req.body,(err,item)=>{
    //            if(err){
    //                res.status(406).json({success:false,message:"failed to created event",data:null})    
    //                console.log(err)
    //             }else{
    //                res.status(201).json({success:true, message:"event created successfully",data:item})
    //             }
    //            });
    // //res.sendStatus(200);
    // },
   create:async(req,res)=>{
         const event = new Event(req.body)
        event.save(req.body,(err,item)=>{
           if(err){
                res.status(406).json({success:false,message:"failed to created event",data:null})    
                console.log(err)
             }else{
                res.status(201).json({success:true, message:"event created successfully",data:item})
     
            }
         })
          },
          getbyidmembre:async(req,res)=>{
            try {
                await  Event.find({membre:mongoose.Types.ObjectId(req.params.id)}).populate("membre").exec((err,events)=>{
                    if(err){
                        res.status(406).json({success:true,message:"failed id",data:null})
                    }else{
                        res.status(201).json({success:true,message:"id with success",data:events})
                    }  
                    
                }) 
                } catch (err) {
                    res.status(500).json(err.error)
                    
                }
            },
         getall: function(req,res){
            Event.find({ 
            },(err,events)=>{
             if(err){
                    res.status(406).json({success:false,message:"event got all event",data:null})    
             }else{
                    res.status(201).json({success:true, message:"list of event ",data:events})
             } 
    
            })
    
        },
        getbyid:async(req,res)=>{
         try {
             await Event.findById(req.params.id).exec((err,item)=>{
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
         Event.findByIdAndRemove(req.params.id,function(err,item){
             if(err){
                 res.status(406).json({success:false,message:"failed deleted event by id "+err,data:null}) 
             }else{
                 res.status(201).json({success:true, message:"event deleted ",data:item})    
             }   
         })
     }
 


}