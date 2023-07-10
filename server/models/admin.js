const db = require('../db');
const { v4: uuidv4 } = require('uuid');
const sqlstring = require('sqlstring');

module.exports = {
  verify: function (data, callback) {
    db.connection.connect();
    db.connection.query(`SELECT * FROM admin WHERE uuid = '${data.uuid}'`, null, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  login: function (data, callback) {
    db.connection.connect();
    db.connection.query(`SELECT * FROM admin WHERE hashword = '${data.hashword}'`, null, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  getAll: function (callback) {
    db.connection.connect();
    db.connection.query('SELECT * FROM invitees', null, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  insert: function (data, callback) {
    db.connection.connect();

    db.connection.query(`SELECT * FROM admin WHERE uuid = '${data.uuid}'`, null, (err, results) => {
      if (err || !results.length) {
        callback(err);
      } else {
        const name = sqlstring.escape(data.name);
        const contact = sqlstring.escape(data.contact);
        const insert_uuid = uuidv4();
        const insert = `INSERT INTO invitees (uuid, name, contact, guests) VALUES ('${insert_uuid}', ${name}, ${contact}, ${data.guests})`;
        db.connection.query(insert, null, (err, results) => {
          if (err) {
            callback(err);
          } else {
            callback(null, results);
          }
        });
      }
    });
  },
  delete: function (data, callback) {
    db.connection.connect();

    db.connection.query(`SELECT * FROM admin WHERE uuid = '${data.uuid}'`, null, (err, results) => {
      if (err || !results.length) {
        callback(err);
      } else {
        const deletion = `DELETE FROM invitees WHERE id = ${data.id}`;
        db.connection.query(deletion, null, (err, results) => {
          if (err) {
            callback(err);
          } else {
            callback(null, results);
          }
        });
      }
    });
  }
};