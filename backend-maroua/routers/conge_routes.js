const express = require("express")
const congecontroller = require("../controllers/conge_controller")

const route = express.Router()
route.post("/create",congecontroller.create)
route.get("/getall",congecontroller.getall)
route.get("/getbyid/:id",congecontroller.getbyid)
route.get("/getbyMem/:id",congecontroller.getbyidmembre)
route.put("/update/:id",congecontroller.update)
route.get("/getbyname",congecontroller.getbyname)
route.delete("/delete/:id",congecontroller.delete)
module.exports= route