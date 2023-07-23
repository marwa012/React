const bureauModel = require("../models/bureau_model")

module.exports={
    //create:(req,res)=>{

        // const bureau = new bureauModel(req.body)
        // bureau.save(req.body,(err,item)=>{
        //    if(err){
        //        res.status(406).json({success:false,message:"failed to created bureau",data:null})    
        //        console.log(err)
        //     }else{
        //        res.status(201).json({success:true, message:"bureau crated successfully",data:item})
     
        //    }
        // })
        create:(req,res)=>{
            const name=String(req.body.name)
            const capacite=Number(req.body.capacite)
            const placeDisponible=Number(req.body.placeDisponible)
            const pourcentagePresence = Math.round((placeDisponible*100)/capacite)


            const bureau = new bureauModel({
                name:req.body.name,
                capacite:req.body.capacite,
                placeDisponible:req.body.placeDisponible,
                pourcentagePresence:pourcentagePresence
            })
            bureau.save(req.body,(err,item)=>{
        
                if(err){
                    res.status(406).json({success:false,message:"cannot create bureau"+err,data:null})    
             }else{
                    res.status(201).json({success:true, message:"Create bureau ",data:item})
             } 
    
            })
          
          
           
     
         },
         getall: function(req,res){
            bureauModel.find({},(err,items)=>{
             if(err){
                    res.status(406).json({success:false,message:"cannot got all bureau",data:null})    
             }else{
                    res.status(201).json({success:true, message:"list of bureau ",data:items})
             } 
    
            })
    
        },
        getById: function(req,res){
    bureauModel.findById(req.params.id,function(err,item){
                if (err) {
                    res.status(404).json({
                        success:false,
                        message:'cannotfind bureau failed',
                        data:null
                    })
                    
                } else {
                    res.status(202).json({
                        success:true,
                        message:'find bureau by id',
                        data:item
                });
            }
        })
    },
    getbyname:function(req,res){
        bureauModel.find({name:req.query.capacite},function(err,items){
            
        if(err){
            res.status(406).json({success:false,message:"cannot get bureau by name ",data:null}) 
        }else{
            res.status(201).json({success:true, message:"find bureau by id ",data:items})    
        }
        })
    },
    update:function(req,res){

        bureauModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
            if(err){
                res.status(406).json({success:false,message:"cannot update",data:null}) 
            }else{
                res.status(201).json({success:true, message:"bureau updated ",data:item})
            }
        })    
        },
        delete:function(req,res){
            bureauModel.findByIdAndRemove(req.params.id,function(err,item){
                if(err){
                    res.status(406).json({success:false,message:"failed deleted bureau by id ",data:null}) 
                }else{
                    res.status(201).json({success:true, message:"bureau deleted ",data:item})    
                }   
            })
        }
        }