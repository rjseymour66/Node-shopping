const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  database: process.env.SQL_DB,
  password: process.env.SQL_PASS
});

module.exports = pool.promise();