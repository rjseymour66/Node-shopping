const Sequelize = require('sequelize');

const sequelize = new Sequelize( process.env.SQL_DB, process.env.SQL_USER, process.env.SQL_PASS, {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;