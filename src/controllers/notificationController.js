const { Notification } = require('../db');

// Controller functions for notification actions
const getAllNotifications = async (req, res, next) => {
  try {
    const notifications = await Notification.findAll();
    res.json(notifications);
  } catch (error) {
    next(error);
  }
};

const getNotificationById = async (req, res, next) => {
  const { notificationId } = req.params;

  try {
    const notification = await Notification.findByPk(notificationId);

    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    res.json(notification);
  } catch (error) {
    next(error);
  }
};

const createNotification = async (req, res, next) => {
  const { NotificationType, Content } = req.body;

  try {
    const newNotification = await Notification.create({
      NotificationType,
      Content,
    });

    res.status(201).json(newNotification);
  } catch (error) {
    next(error);
  }
};

const updateNotification = async (req, res, next) => {
  const { notificationId } = req.params;
  const { NotificationType, Content } = req.body;

  try {
    const existingNotification = await Notification.findByPk(notificationId);

    if (!existingNotification) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    existingNotification.NotificationType = NotificationType || existingNotification.NotificationType;
    existingNotification.Content = Content || existingNotification.Content;

    await existingNotification.save();

    res.json(existingNotification);
  } catch (error) {
    next(error);
  }
};

const deleteNotification = async (req, res, next) => {
  const { notificationId } = req.params;

  try {
    const existingNotification = await Notification.findByPk(notificationId);

    if (!existingNotification) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    await existingNotification.destroy();

    res.json({ message: 'Notification deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNotifications,
  getNotificationById,
  createNotification,
  updateNotification,
  deleteNotification,
};