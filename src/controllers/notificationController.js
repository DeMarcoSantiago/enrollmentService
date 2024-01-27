// enrollment-service/src/controllers/notificationController.js
const { Notification } = require('../db');

// Controller functions for notification actions
const getAllNotifications = async (req, res) => { /* ... */ };
const getNotificationById = async (req, res) => { /* ... */ };
const createNotification = async (req, res) => { /* ... */ };
const updateNotification = async (req, res) => { /* ... */ };
const deleteNotification = async (req, res) => { /* ... */ };

module.exports = {
  getAllNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
};