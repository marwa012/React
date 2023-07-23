const express=require('express')
const dotenv = require('dotenv').config();
const database = require('./config/database')
const app =express()
const cors = require("cors")
const morgan = require("morgan")

const PORT = process.env.PORT;

var corsOptions= {
    origin:"http://localhost:3001",
    optionsSuccessStatus:200
}
var corsOptions= {
    origin:"http://localhost:3002",
    optionsSuccessStatus:200
}
app.use(cors("corsOptions"))
app.use(morgan("tiny"))


app.use(express.json());
const plannicationRouter=require("./routers/plannification_routes")
const sondageRouter=require("./routers/sondage_routes")
const reservationRouter=require("./routers/reservation_routes")
const calendarRouter=require("./routers/calendar_routes")
const projetRouter=require("./routers/projet_routes")
const managerRouter=require("./routers/manager_routes")
const bureauRouter = require("./routers/bureau_routes")
const documentRouter = require("./routers/document_routes")
const membreRouter = require("./routers/membre_routes")
const ressourceRouter = require("./routers/ressource_routes")
const directeurRouter = require("./routers/directeur_routes")
const AuthRouter = require("./routers/Auth_routes")
const tacheRouter = require("./routers/tache_routes")
const absenceRouter = require("./routers/absence_routes")
const presenceRouter = require("./routers/presence_routes")
const equipeRouter = require("./routers/equipe_routes")
const congeRouter = require("./routers/conge_routes")
app.use("/plannification",plannicationRouter)
app.use("/sondage",sondageRouter)
app.use("/reservation",reservationRouter)
app.use("/calendar",calendarRouter)
app.use("/projet",projetRouter)
app.use("/manager",managerRouter)
app.use("/bureau",bureauRouter)
app.use("/document",documentRouter)
app.use("/membre",membreRouter)
app.use("/presence",presenceRouter)
app.use("/ressource",ressourceRouter)
app.use("/directeur",directeurRouter)
app.use("/tache",tacheRouter)
app.use("/equipe",equipeRouter)
app.use("/absence",absenceRouter)
app.use("/Auth",AuthRouter)
app.use("/conge",congeRouter)

app.get("/getImage/:img", function(req, res) {
    res.sendFile(__dirname + "/storages/" + req.params.img)
})

app.listen(PORT,function(){
    console.log(`http://localhost:${PORT}`)
})