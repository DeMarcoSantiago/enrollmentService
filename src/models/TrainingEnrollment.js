const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const TrainingEnrollment = sequelize.define('TrainingEnrollment', {
    EnrollmentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ProgressStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return TrainingEnrollment;
};