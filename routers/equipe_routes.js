const express = require("express")
const route = require("express").Router()
const equipeController = require("../controllers/equipe_controller")
route.post("/create",equipeController.create)
route.get("/getall",equipeController.getall)
route.get("/getbyid/:id",equipeController.getbyid)
route.put("/update/:id",equipeController.update)
route.delete("/delete/:id",equipeController.delete)
module.exports= route