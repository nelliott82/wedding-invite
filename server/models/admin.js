const db = require('../db');

module.exports = {
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
  create: function (data, callback) {
    db.connection.connect();
    const insert = `INSERT INTO invitees (email, guests) VALUES ("${data.email}", '${data.guests}')`;
    db.connection.query(insert, null, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
};