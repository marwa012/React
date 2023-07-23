const express = require("express")
const route =express.Router()
const AuthController = require("../controllers/Auth_controller")
route.post("/login",AuthController.login)
route.post("/refreshToken",AuthController.RefreshToken)
route.post("/logout",AuthController.logout)
module.exports= route