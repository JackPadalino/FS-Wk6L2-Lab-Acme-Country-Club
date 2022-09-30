const Sequelize = require('sequelize'); // importing Sequelize ORM
const db = new Sequelize('postgres://localhost:5432/acme_cc'); // URL path to our db

module.exports = db;