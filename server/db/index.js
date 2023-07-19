const mysql = require('mysql2');
require('dotenv').config();

module.exports = {
  connection: mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'invites'
  })
};

// const { Client } = require('pg');

// const client = new Client({
//   connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
// });

// client.connect()
//   .then(() => console.log('connected to database!'))
//   .catch((err) => console.error('connection error', err.stack));

// module.exports = client;