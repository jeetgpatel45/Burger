// Set up MySQL connection.
require('dotenv').config();
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) { throw err } else {
      console.log("Connected as id " + connection.threadId);
  };
});

// Export connection for our ORM to use.
module.exports = connection;