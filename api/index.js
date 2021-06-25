const server = require("./src/app.js");
const { conn } = require("./src/database.js");

const { User, Match } = require("./src/database.js");

let users = [
  {
    name: "Carlos",
    email: "carlos@c.com",
    password: "admin123",
  },
  {
    name: "Laura",
    email: "laulau@gmail.com",
    password: "admin123",
  },]
  console.log("usuarios creados")

  conn.sync({ force: true }).then(() => {
    server.listen(4000, async () => {
      console.log(`server listening at 4000`)
      users.forEach(async (user) => {
        try {
        const usuario = await User.create(user)
        } catch (err){ console.error(err)}
      })
    })


  })