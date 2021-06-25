const { DataTypes } = require("sequelize")
const User = require("./User")

module.exports = (sequelize) => {
  sequelize.define(
    "match",
    {
      winDifference: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      winner_id: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      looser_id: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      tie: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: false }
  );
}