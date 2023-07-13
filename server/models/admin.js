const db = require('../db');
const { v4: uuidv4 } = require('uuid');
const sqlstring = require('sqlstring');
const bcrypt = require('bcryptjs');

module.exports = {
  verify: function (uuid, callback) {
    db.connection.connect();
    db.connection.query(`SELECT * FROM admin WHERE uuid = '${uuid}'`, null, (err, results) => {
      console.log(results)
      if (err) {
        callback(err);
      } else if (!results.length) {
        callback('Access denied');
      } else {
        callback(null, results);
      }
    });
  },
  login: function (data, callback) {
    db.connection.connect();
    const email = sqlstring.escape(data.email);

    db.connection.query(`SELECT * FROM admin WHERE email = ${email} AND uuid = '${data.uuid}'`, null, (err, results) => {
      console.log('login verify results: ', results)
      if (err) {
        callback(err);
      } else if (!results.length) {
        callback('Access denied');
      } else {
        const hashword = results[0].hashword;
        if (hashword) {
          bcrypt.compare(data.password, hashword, function(err, isMatch) {
            if (isMatch) {
              callback(null, results);
            } else {
              callback('Incorrect Password');
            }
          });
        } else {
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(data.password, salt, function(err, hash) {
              let sessionEnds = new Date();
              sessionEnds.setMonth(sessionEnds.getMonth() + 2);
              sessionEnds = sessionEnds.toISOString().split('T')[0];
              console.log('sessionEnds: ', sessionEnds);
              const update = `UPDATE admin
                              SET hashword = '${hash}', session_ends = '${sessionEnds}'
                              WHERE uuid = '${data.uuid}'`;
              db.connection.query(update, null, (err, results) => {
                console.log('update login results: ', results)
                if (err) {
                  callback(err);
                } else {
                  callback(null, results);
                }
              });
            });
          });
        }
      }
    });
  },
  getAll: function (data, callback) {
    db.connection.connect();
    const getAll = `SELECT * FROM invitees WHERE EXISTS (SELECT * FROM admin WHERE uuid = '${data.uuid}');`
    db.connection.query(getAll, null, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  insert: function (data, callback) {
    db.connection.connect();
    console.log(data)
    const name = sqlstring.escape(data.name);
    const contact = sqlstring.escape(data.contact);
    const insert_uuid = uuidv4();
    const insert = `INSERT INTO invitees (uuid, name, contact, guests, language)
                    SELECT '${insert_uuid}', ${name}, ${contact}, ${data.guests}, ${data.language}
                    FROM dual
                    WHERE EXISTS (SELECT * FROM admin WHERE uuid = '${data.uuid}')`;
    db.connection.query(insert, null, (err, results) => {
      if (err) {
        callback(err);
      } else {
        db.connection.query(`SELECT * FROM invitees`, null, (err, results) => {
          if (err) {
            callback(err);
          } else {
            callback(null, results);
          }
        })
      }
    });
  },
  delete: function (data, callback) {
    db.connection.connect();

    const deletion = `DELETE FROM invitees WHERE id = ${data.id} AND EXISTS (SELECT * FROM admin WHERE uuid = '${data.uuid}')`;
    db.connection.query(deletion, null, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
};