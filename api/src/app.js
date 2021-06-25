const express = require("express")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const routes  = require("./routes/index.js")
const cors = require("cors")
require("./database.js")

const server = express()
server.name = "API"

server.use(express.urlencoded({ extended: true, limit: "50mb"}))
server.use(express.json({ limit: '50mb'}))
server.use(cookieParser())
server.use(morgan("dev"))
server.use(cors())
server.use((req, res, next) => {
  res.header("Acces-Control-Allow-Origin", "*")
  res.header("Acces-Control-Allow-Credentials", "true")
  res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

server.use("/", routes)

server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})

module.exports = server