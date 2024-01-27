const { DataTypes } = require('sequelize');
const User = require('./user'); // Adjust the path based on your project structure

module.exports = (sequelize) => {
  const Notification = sequelize.define('Notification', {
    NotificationID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NotificationType: {
      type: DataTypes.ENUM(
        'TrainingUpdate',
        'Achievement',
        'Reminder',
        'ProgressTracking',
        'Announcement',
        'FeedbackRequest',
        'InteractiveQuiz',
        'LanguageChange',
        'UserEngagement',
        'Certification'
      ),
      allowNull: false,
    },
    Content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  });
return Notification;
};