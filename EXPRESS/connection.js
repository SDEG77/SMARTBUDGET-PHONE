const mysql = require('mysql2');
const env = require('dotenv');

env.config()

const database = mysql.createConnection({
  host: process.env.HOSTNAME,
  user: process.env.USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = database;