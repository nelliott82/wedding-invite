const mysql = require('mysql2');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  connection: mysql.createConnection({
    user: 'root',
    password: '',
    database: 'invites'
  })
};