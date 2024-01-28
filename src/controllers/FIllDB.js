const { TrainingEnrollment } = require('../db');
const trainingEnrollmentData = require('../../data.json');

const fillDB = async () => {
  try {
    for (const enrollment of trainingEnrollmentData) {
      await TrainingEnrollment.findOrCreate({
        where: {
          EnrollmentID: enrollment.EnrollmentID,
        },
        defaults: {
          ProgressPercentage: enrollment.ProgressPercentage,
        },
      });
    }

    console.log('Training Enrollment Database filled successfully!');
  } catch (error) {
    console.error('Error filling the Training Enrollment database:', error);
  }
};

module.exports = fillDB;