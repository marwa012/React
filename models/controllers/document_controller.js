const documentModel = require ("../models/document_model")
module.exports={
    createDocument: function(req, res) {
        // req.body["image"]=req.file.filename;
        req.body["Galleries"]=req.files.length<=0?[]:req.files.map(function(file){
            return ({
                name:file.filename,
                description:"add photo"
            })
        })
        const document = new documentModel(req.body);
        document.save(req.body, function(err, item) {
            if (err) {
                res.status(404).json({
                    success: false,
                    message: 'created document failed'+err,
                    data: null
                });
                console.log(err)
            } else {
                res.status(201).json({
                    Success: true,
                    message: 'document created successfly',
                    data: item
                });
            }
        });
    },
    getall: function(req,res){
        documentModel.find({},(err,items)=>{
         if(err){
                res.status(406).json({success:false,message:"cannot got all document",data:null})    
         }else{
                res.status(201).json({success:true, message:"list of document ",data:items})
         } 

        })

    },
    getbyid: async(req,res)=>{
        try {
            await documentModel.findById(req.params.id).exec((err,item)=>{
        
                if(err){
                    res.status(406).json({success:false,message:"failed cration ",data:null})
                }else{
        
                    res.status(201).json({success:true,message:"created with success",data:item})
                } 
        
            })
            
        } catch (err) {
            res.status(500).json(err.error)  
        }
        },
        getbyname : async(req,res)=>{
            try {
              await  documentModel.find({name:req.query.titre}).exec((err,items)=>{
                  if(err){
                      res.status(406).json({success:false,message:"failed  ",data:null})
                  }else{
                      res.status(201).json({success:true,message:" success",data:items})
                  } 
          
              })
            } catch (error) {
                res.status(500).json(error.err)
                
            }  
          },
           
        update: function (req, res) {

            // req.body.image = req.file.filename
            req.body["Galleries"]=req.files.length<=0?[]:req.files.map(function(file){
                return ({
                    name:file.filename,
                    description:"add photo"
                })
            })
            
            documentModel.findByIdAndUpdate(
              req.params.id,
              req.body,
              { new: true },
              function (err, item) {
                if (err) {
                  res.status(401).json({
                    success: false,
                    message: "connot update document",
                    data: null,
                  });
                } else {
                  res
                    .status(200)
                    .json({
                      success: true,
                      message: "document updated successfully",
                      data: item,
                    });
                }
              }
            );
          },
          delete: async(req,res)=>{
            try {
                await  documentModel.findByIdAndDelete(req.params.id).exec((err,item)=>{
                    if(err){
                        res.status(406).json({success:false,message:"failed  remove ",data:null})
                    }else{
                        res.status(201).json({success:true,message:" success remove",data:item})
                    }
                })    
                
            } catch (error) {
                res.status(500).json(error.err)
            }
        
        }
};