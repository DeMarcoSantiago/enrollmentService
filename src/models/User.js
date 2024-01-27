// enrollment-service/models/user.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    LanguagePreference: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return User;
};