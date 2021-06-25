const { DataTypes } = require("sequelize")
const bcrypt = require("bcrypt")

module.exports = (sequelize) => {
  const User = sequelize.define(
    "user",
    {
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value){
          if (value){
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(value, salt)
            this.setDataValue("password", hash)
          }
        }
      },
    },
    { timestamps: false }
  );
  User.prototype.compare = function (pass) {
    return bcrypt.compareSync(pass, this.password)
  }
  return User
}