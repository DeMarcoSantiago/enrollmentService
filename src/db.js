require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
const UserModel = require('./models/user');
const NotificationModel = require("./models/Notification")
const TrainingEnrollmentModel = require("./models/TrainingEnrollment")

const sequelize = new Sequelize(
  `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/USERS_DB`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, "/models", file));
    model(sequelize); // Inject sequelize connection to the model
    modelDefiners.push(model);
  });

// Capitalize model names
const entries = Object.entries(sequelize.models);
const capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

UserModel(sequelize);
NotificationModel(sequelize);
TrainingEnrollmentModel(sequelize);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Notification,TrainingEnrollment,User } = sequelize.models;
// Define associations

TrainingEnrollment.belongsTo(User);
Notification.belongsTo(User);
User.hasMany(TrainingEnrollment);
User.hasMany(Notification);
TrainingEnrollment.belongsToMany(User, { through: 'UserTrainingEnrollment' });
User.belongsToMany(TrainingEnrollment, { through: 'UserTrainingEnrollment' });

Notification.belongsToMany(User, { through: 'UserNotification' });
User.belongsToMany(Notification, { through: 'UserNotification' });
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};