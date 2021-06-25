const { Match, User } = require("../database.js");

async function getAllMatches(req, res) {
  try {
      const matches = await Match.findAll({
        include: { model: User, through: ["points"] },
        order: [["id", "DESC"]],
      });
      if(!matches || matches.length === 0) {res.status(404).json("There are no matches")}
      else { res.status(200).send(matches)}
  } catch (err) {
    console.error(err);
    res.status(404).send(err);
  }
}

async function getMatchById(req, res) {
  const { id } = req.params;
  try {
    const match = await Match.findByPk(id, { include: User });
    if (!match) {
      return res.status(404).end();
    }
    return res.json(match);
  } catch (err) {
    res.status(404).send(err);
  }
}


async function createMatch(req, res) {
  const { userOneEmail, userTwoEmail } = req.body;
  try {
    const userOne = await User.findOne({ where: { email: userOneEmail } });
    const userTwo = await User.findOne({ where: { email: userTwoEmail } });

    if (!userOne) return res.status(404).json(userOneEmail + " email not registered");
    if (!userTwo) return res.status(404).json(userTwoEmail + " email not registered");

      const today = new Date();
      const match = await Match.create({
        date: `${today.getUTCDate()}/${today.getUTCMonth()}/${today.getUTCFullYear()}`,
      });
      await match.addUser(userOne);
      await match.addUser(userTwo);
     
    return res.send(match);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
}



async function editMatchById(req, res) {
  const idMatch = req.params.id
  const { userOneId, pointsOne, userTwoId, pointsTwo, winDifference, winner_id, looser_id, tie } = req.body
  try {
    const match = await Match.findByPk(idMatch);
    const userOne = await User.findByPk(userOneId);
    const userTwo = await User.findByPk(userTwoId);
  
    await match.addUser(userOne, {
      through: {
       points: pointsOne,
      },
    });
    await match.addUser(userTwo, {
      through: {
        points: pointsTwo,
      },
    });
    await match.update(
      {
        winDifference: winDifference,
        winner_id: winner_id, 
        looser_id: looser_id, 
        tie: tie,
      },
      {
        returning: true,
      }
    );
    matchId = match.id
    const final = await Match.findByPk(matchId, {include: {model: User, through: ['points']}})
    //await match.getUsers()
    res.json(final).status(200);
  } catch (err) {
    console.error(err);
    res.status(404).send(err);
  }
}



module.exports = {
  getAllMatches,
  createMatch,
  getMatchById,
  editMatchById,
};

