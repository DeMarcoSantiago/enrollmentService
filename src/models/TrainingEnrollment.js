const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TrainingEnrollment = sequelize.define('TrainingEnrollment', {
    EnrollmentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ProgressPercentage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100,
      },
    },
  });
};
