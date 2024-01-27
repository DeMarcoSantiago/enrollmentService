// enrollment-service/src/controllers/trainingEnrollmentController.js
const { TrainingEnrollment } = require('../db');

// Controller functions for training enrollment actions
const getAllTrainingEnrollments = async (req, res) => { /* ... */ };
const getTrainingEnrollmentById = async (req, res) => { /* ... */ };
const createTrainingEnrollment = async (req, res) => { /* ... */ };
const updateTrainingEnrollment = async (req, res) => { /* ... */ };
const deleteTrainingEnrollment = async (req, res) => { /* ... */ };

module.exports = {
  getAllTrainingEnrollments,
  getTrainingEnrollmentById,
  createTrainingEnrollment,
  updateTrainingEnrollment,
  deleteTrainingEnrollment,
};