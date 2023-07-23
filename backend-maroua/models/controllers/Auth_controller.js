
const usermodel= require("../models/user_model")
const bcrypt = require("bcrypt")
const jwt= require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
const RT_SECRET = process.env.RT_SECRET
let RefreshTokens = []

//generate access token
const  generateAccessToken = (user)=>{
    return jwt.sign({id:user._id,isRH:user.isRH,isManager:user.isManager},JWT_SECRET,{expiresIn:"10h"})
 }
 const generateRefreshToken = function(user){
    return jwt.sign({id:user._id,isRH:user.isRH,isManager:user.isManager},RT_SECRET,{expiresIn:"20h"})  
}

    // login:async(req,res)=>{
    //     try{
            
    //         const user = await usermodel.findOne({email:req.body.email})
    //         if(!user){
    //             res.status(406).json("email not founded")      
    //         }else{
    //             const validPassword= await bcrypt.compare(req.body.password,user.password)
    //             if(!validPassword){
    //                res.status(406).json("password incorrect") 
    //             }else{

    //                 const AccessToken = generateAccessToken(user)
          
    //                 res.status(201).json(AccessToken)
    //             }
    //         }
            
       
    // }catch(error){
    // res.status(500).json(error)
    //     }
        

    // }
    module.exports={
    login:(req,res)=>{
        usermodel.findOne({email:req.body.email},(err,user)=>{
                if (err){
                    res.status(406).json({success:false, message:"err login"})
                }else{
                    if(user){
                        if (bcrypt.compareSync(req.body.password,user.password)){
                        
                            const   AccessToken =  generateAccessToken(user)
                          
                            const RefreshToken = generateRefreshToken(user)
                            RefreshTokens.push(RefreshToken)
    
    
                            res.status(201).json({success:true,message:" user found", data:user,AccessToken,RefreshToken})
                        }else{
                            res.status(406).json({message:"password not found"})
                        }
    
                    }else {
                        res.status(406).json({message:"email incorrect"})
                    }
                }
    
            })
    
        },

        RefreshToken:(req,res,next)=>{
            const RefreshToken = req.body.token
        
            if(!RefreshToken) return res.status(401).json({message:"u r not authentificated"})
                if(!RefreshTokens.includes(RefreshToken)){
                return res.status(403).json({message:"refresh token is not valid "})
            }
            jwt.verify(RefreshToken,RT_SECRET,(err,user)=>{
                err && console.log(err)
                    RefreshTokens= RefreshTokens.filter((token)=>token!==RefreshToken)//***token */
                
                    const newAccessToken = generateAccessToken(user)
                    const newRefreshToken= generateRefreshToken(user)
                    RefreshTokens.push(newRefreshToken)
            res.status(200).json({AccessToken:newAccessToken,RefreshToken:newRefreshToken})        
            })
            
        
           },
           logout:(req,res,next)=>{
            const RefreshToken = req.body.token
            RefreshTokens= RefreshTokens.filter((token)=>token!==RefreshToken)
            res.status(200).json("u'r logout ")
        }
}
  
