
const express = require('express');
const router = express.Router();
const TrainingEnrollmentController = require('../controllers/trainingEnrollmentController');

// Get all training enrollments
router.get('/enrollment', TrainingEnrollmentController.getAllTrainingEnrollments);

// Get training enrollment by ID
router.get('/enrollment/:enrollmentId', TrainingEnrollmentController.getTrainingEnrollmentById);

// Create a new training enrollment
router.post('/enrollment', TrainingEnrollmentController.createTrainingEnrollment);

// Update training enrollment by ID
router.put('/enrollment/:enrollmentId', TrainingEnrollmentController.updateTrainingEnrollment);

// Delete training enrollment by ID
router.delete('/enrollment/:enrollmentId', TrainingEnrollmentController.deleteTrainingEnrollment);

module.exports = router;