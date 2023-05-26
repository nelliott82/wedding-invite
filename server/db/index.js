const mysql = require('mysql2');

module.exports = {
  connection: mysql.createConnection({
    user: 'root',
    password: '',
    database: 'invites'
  })
};