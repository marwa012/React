const express = require("express")
const absence_controller = require("../controllers/absence_controller")


const route = express.Router()
route.post("/create",absence_controller.create)

module.exports= route