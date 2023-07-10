const db = require('../db');
const sqlstring = require('sqlstring');

module.exports = {
  getOne: function (uuid, callback) {
    db.connection.connect();
    db.connection.query(`SELECT name, guests FROM invitees WHERE uuid = '${uuid}'`, null, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  update: function (data, callback) {
    db.connection.connect();

    const songs = sqlstring.escape(data.songs);

    const update = `UPDATE invitees
                    SET guests = ${data.guests}, attending = ${data.attending}, songs = ${songs}
                    WHERE uuid = '${data.uuid}'`;
    db.connection.query(update, null, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
};