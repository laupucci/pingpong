const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UserPoints = sequelize.define('UserPoints', {
    points:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
  return UserPoints
};
