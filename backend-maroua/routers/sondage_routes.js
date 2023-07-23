const express = require("express")
const route = express.Router()
const sondageController = require("../controllers/sonda_controller")
route.post("/create",sondageController.create)
route.get("/getall",sondageController.getall)
route.get("/getbyid/:id",sondageController.getbyid)
route.delete("/delete/:id",sondageController.delete)
route.put("/update/:id",sondageController.update)
module.exports= route