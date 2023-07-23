const tacheModel = require ("../models/tache_model")
module.exports={
    createTache: function(req, res) {
        const tache = new tacheModel(req.body);
        tache.save(req.body, function(err, item) {
            if (err) {
                res.status(404).json({
                    success: false,
                    message: 'created tache failed'+err,
                    data: null
                });
                console.log(err)
            } else {
                res.status(201).json({
                    Success: true,
                    message: 'tache created successfly',
                    data: item
                });
            }
        });
    },
    getbyidtache:async(req,res)=>{
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
        tacheModel.find({}).populate("membre").exec((err,items)=>{
         if(err){
                res.status(406).json({success:false,message:"cannot got all tache",data:null})    
         }else{
                res.status(201).json({success:true, message:"list of tache ",data:items})
         } 

        })

    },
    update:function(req,res){
        tacheModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item) {
            if (err) {
                res.status(404).json({
                    success: false,
                    message: 'can not get tache update by id',
                    data: null
                });
                console.log(err)
            } else {
                res.status(201).json({
                    success:true,
                    message:'can get tache update by id',
                    data:item
                }) ;
            }
        })
      }, 
      delete:(req,res)=>{
        tacheModel.findByIdAndDelete(req.params.id,function(err,item){
            if (err) {
                res.status(406).json({
                    success:false,
                    message:'can not find tache for delete',
                    data:null
                }) ;
            } else {
                res.status(201).json({
                    success:true,
                    message:'can get delete tache by this id',
                    data:item
                }) ;
            }
        })
      } ,
      getbyname:async(req,res)=>{
        try {
          await  tacheModel.find({ref:req.query.titre}).exec((err,item)=>{
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
            await tacheModel.findById(req.params.id).exec((err,item)=>{
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