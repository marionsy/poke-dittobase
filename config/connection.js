// Require dependency
const Sequelize = require('sequelize');

// Enables access to .env variables
require('dotenv').config();

// Connects to database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  },
);

module.exports = sequelize;