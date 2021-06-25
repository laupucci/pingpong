const { User, Match } = require("../database.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { JWT_SECRET } = process.env;

async function getAllUsers(req, res) {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "email"],
      order: ["id"],
    });
    res.send(users);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function getAllMatchesFromAnUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      include: { model: Match, include: {model: User}},
    }, {returning: true});
    if (user.matches.length == 0) throw "No match found for this user";
    res.send(user.matches);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function signUp(req, res) {
  try {
    const user = await User.create(req.body);
    const { id, name, email } = user;
    const token = jwt.sign(
      {
        id,
        name,
        email,
      },
      JWT_SECRET
    );

    return res.status(200).send(token);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400).send(err);
  }
}

async function logIn(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findAll({ where: { email: email } });
    console.log(user);
    if (!user || user.length === 0) {
      return res.status(400).json("this email is not associated to a user");
    } else {
      const theUser = user[0].dataValues;
      const checkPassword = await bcrypt.compare(password, theUser.password);
      if (!checkPassword) {
        return res.status(400).json("wrong password");
      } else {
        const token = jwt.sign(
          { id: theUser.id, name: theUser.name, email: theUser.email },
          JWT_SECRET
        );
        return res.status(200).send(token);
      }
    }
  } catch (err) {
    return res.status(400).send(err);
  }
}

module.exports = {
  getAllUsers,
  getAllMatchesFromAnUser,
  signUp,
  logIn,
};
