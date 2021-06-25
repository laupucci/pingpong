const server = require("express").Router();
const {
  getAllMatches,
  createMatch,
  getMatchById,
  editMatchById,
  changePoints
}  = require("../controllers/match-controller.js");


server.get("/all", getAllMatches);
server.post("/newMatch", createMatch);
server.get("/:id", getMatchById);
server.put("/:id", editMatchById);
server.put("/points/:id", changePoints);

module.exports = server;