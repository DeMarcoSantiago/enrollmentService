// enrollment-service/src/routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/notificationController');

// Get all notifications
router.get('/notifications', NotificationController.getAllNotifications);

// Get notification by ID
router.get('/notifications/:notificationId', NotificationController.getNotificationById);

// Create a new notification
router.post('/notifications', NotificationController.createNotification);

// Update notification by ID
router.put('/notifications/:notificationId', NotificationController.updateNotification);

// Delete notification by ID
router.delete('/notifications/:notificationId', NotificationController.deleteNotification);

module.exports = router;