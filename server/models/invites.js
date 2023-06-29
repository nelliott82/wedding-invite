const db = require('../db');

module.exports = {
  getOne: function (data, callback) {
    db.connection.connect();
    db.connection.query(`SELECT * FROM invitees WHERE uuid = '${data.uuid}`, null, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  create: function (data, callback) {
    db.connection.connect();

    const uuid = uuidv4();
    const insert = `INSERT INTO invitees (uuid, email, guests) VALUES ('${uuid}', '${data.email}', ${data.guests})`;
    db.connection.query(insert, null, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  delete: function (data, callback) {
    db.connection.connect();
    const deletion = `DELETE FROM invitees WHERE id = ${data.id}`;
    db.connection.query(deletion, null, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
};