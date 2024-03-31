//imports seqialize for the model
const { Model, DataTypes } = require('sequelize');
//users the connection.js in Config to connect to postgres
const sequelize = require('../config/connection');

//creates the class Comment as an extemtion of a sequalize model
class User extends Model {}

//the model for a user
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

//exports the model
module.exports = User;
