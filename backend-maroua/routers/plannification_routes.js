const express = require("express")
const route = express.Router()
const PlannificationController = require("../controllers/plannification_controller")
const upload = require("../middleware/uploadFile")

const {verifytoken,verifyTokenAndAuthorization,verifyTokenAndAdmmin} = require("../middleware/Auth")

route.post("/create",upload.array("photos"), PlannificationController.create)
route.get("/getall", PlannificationController.getall)
route.get("/getbyid/:id", PlannificationController.getById)
route.get("/getmyplan/:id", PlannificationController.getmyplanni)
route.get("/getbyname", PlannificationController.getbyname)
route.put("/update/:id", PlannificationController .update)
route.delete("/delete/:id", PlannificationController .delete)

module.exports= route