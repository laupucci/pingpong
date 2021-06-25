const server = require("express").Router();
const {
  getAllMatches,
  createMatch,
  getMatchById,
  editMatchById,
}  = require("../controllers/match-controller.js");


server.get("/all", getAllMatches);
server.post("/newMatch", createMatch);
server.get("/:id", getMatchById);
server.put("/:id", editMatchById);

module.exports = server;