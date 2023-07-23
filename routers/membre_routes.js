const express = require("express")
const route = require("express").Router()
const MembreController = require("../controllers/membre_controller")
const upload = require('../middleware/uploadFile')
const {verifytoken,verifyTokenAndauthorization} = require("../middleware/Auth")


route.post("/register",upload.single("photo"),MembreController.register)
route.get("/getall",MembreController.getall)
route.get("/getbyid/:id",MembreController.getbyid)
route.get("/getbyname",MembreController.getbyname)
route.put("/updatebyid/:id",MembreController.updatemembre)
route.delete("/delete/:id",MembreController.delete)

// route.get("/update/:id",MembreController.update)
route.get("/stats",MembreController.getstates)
module.exports=route