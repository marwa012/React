const express = require("express")
const route = express.Router()

const calendarcontroller = require("../controllers/calendarController")
route.post("/create-event",calendarcontroller.create)
route.get("/get-events",calendarcontroller.getall)
route.get("/getbyid/:id",calendarcontroller.getbyid)
route.get("/getbyMem/:id",calendarcontroller.getbyidmembre)
route.delete("/delete/:id",calendarcontroller.delete)
module.exports= route