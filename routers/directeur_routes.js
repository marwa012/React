const express = require("express")
const route = require("express").Router()
const DirecteurController = require("../controllers/directeur_controller")


route.post("/register",DirecteurController.register)

module.exports=route