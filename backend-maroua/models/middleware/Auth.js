const { verify } = require("jsonwebtoken")
const jwt = require("jsonwebtoken")
const JWT_SECRET= process.env.JWT_SECRET


const verifytoken = (req,res,next)=>{

    const authHeader = req.headers.authorization

    if (authHeader){
        const token = authHeader 
        jwt.verify(token,JWT_SECRET,(err,user)=>{
            if(err){
                res.status(403).json({message:"token is not valid"})
            }else{
                req.user = user
                next()
            }
        })
    }else{
        res.status(401).json({message:"you are not authenticated"})
    }
}
    const verifyTokenAndauthorization=(req,res,next)=>{
        verifytoken(req,res,()=>{
    
        
            if (req.user.id === req.params.id || req.user.isRH){
    
                next()
    
            }else{
                return res.status(403).json("ur not allowed to do that ")
            }
        })
    
    
    
}
const verifyTokenAndauthorizationmana=(req,res,next)=>{
    verifytoken(req,res,()=>{

    
        if (req.user.isRH || req.user.isManager){

            next()

        }else{
            return res.status(403).json("ur not allowed to do that ")
        }
    })



}
const verifytokenAndAdmin = (req,res,next)=>{
    verifytoken(req,res,()=>{
     if(req.user.isRH)  {
         next()


    }else{
        res.status(403).json("ur not allowed to do that ")
    }
    })
}
const verifytokenAndManger = (req,res,next)=>{
    verifytoken(req,res,()=>{
     if(req.user.isManager)  {
         next()


    }else{
        res.status(403).json("ur not allowed to do that ")
    }
    })
}



module.exports = {verifytoken,verifyTokenAndauthorization,verifytokenAndAdmin}