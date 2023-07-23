const express = require("express")
const projetcontroller = require("../controllers/projet_controller")


const route = express.Router()
route.post("/create",projetcontroller.create)
route.get("/getall",projetcontroller.getall)
route.get("/getbyname",projetcontroller.getbyname)
route.get("/getbyid/:id",projetcontroller.getbyid)
route.put("/update/:id",projetcontroller.update)
route.delete("/delete/:id",projetcontroller.delete)
module.exports= route