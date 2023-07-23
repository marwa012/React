const express = require("express")
const route = express.Router()
const reservationController = require("../controllers/reservationController")
route.post("/create",reservationController.create)
route.get("/get-events",reservationController.getall)
route.get("/getbyid/:id",reservationController.getbyid)
route.get("/getbyMem/:id",reservationController.getbyidmembre)
route.delete("/delete/:id",reservationController.delete)
route.put("/update/:id",reservationController.update)
module.exports= route


