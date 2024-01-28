const { TrainingEnrollment, User } = require('../db');

// Controller functions for training enrollment actions
const getAllTrainingEnrollments = async (req, res, next) => {
  try {
    // Your implementation to fetch all training enrollments
    const trainingEnrollments = await TrainingEnrollment.findAll();
    res.json(trainingEnrollments);
  } catch (error) {
    next(error);
  }
};

const getTrainingEnrollmentById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const trainingEnrollment = await TrainingEnrollment.findByPk(id);

    if (!trainingEnrollment) {
      return res.status(404).json({ error: 'Training Enrollment not found' });
    }

    res.json(trainingEnrollment);
  } catch (error) {
    next(error);
  }
};

const createTrainingEnrollment = async (req, res) => {
  const { ProgressPercentage, UserId } = req.body;

  try {
    // Create a new training enrollment with the associated user
    const newEnrollment = await TrainingEnrollment.create({
      ProgressPercentage,
      UserId, // Update to the correct property name for the associated user's ID
    });

    res.status(201).json(newEnrollment);
  } catch (error) {
    console.error('Error creating training enrollment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



const updateTrainingEnrollment = async (req, res, next) => {
  const { id } = req.params;
  const { ProgressPercentage } = req.body;

  try {
    const existingTrainingEnrollment = await TrainingEnrollment.findByPk(id);

    if (!existingTrainingEnrollment) {
      return res.status(404).json({ error: 'Training Enrollment not found' });
    }

    existingTrainingEnrollment.ProgressPercentage = ProgressPercentage || existingTrainingEnrollment.ProgressPercentage;

    await existingTrainingEnrollment.save();

    res.json(existingTrainingEnrollment);
  } catch (error) {
    next(error);
  }
};

const deleteTrainingEnrollment = async (req, res, next) => {
  const { id } = req.params;

  try {
    const existingTrainingEnrollment = await TrainingEnrollment.findByPk(id);

    if (!existingTrainingEnrollment) {
      return res.status(404).json({ error: 'Training Enrollment not found' });
    }

    await existingTrainingEnrollment.destroy();

    res.json({ message: 'Training Enrollment deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTrainingEnrollments,
  getTrainingEnrollmentById,
  createTrainingEnrollment,
  updateTrainingEnrollment,
  deleteTrainingEnrollment,
};