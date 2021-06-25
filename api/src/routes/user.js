const server = require("express").Router();

const {
  getAllUsers,
  getAllMatchesFromAnUser,
  signUp,
  logIn,
}  = require("../controllers/user-controller");

server.get("/allUsers", getAllUsers);
server.get("/:id/matches", getAllMatchesFromAnUser);
server.post("/signUp", signUp)
server.post("/login", logIn)

module.exports = server;