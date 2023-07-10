const models = require('../models');
const url = require('url');

module.exports = {
  get: function (req, res) {
    const uuid = req.params.uuid || req.cookies.uuid;
    console.log(req.cookies)
    models.invitees.getOne(uuid, function(err, results) {
      if (err) {
        res.statusCode = 400;
        res.end(JSON.stringify(err));
      } else {
        if (results.length) {
          res.cookie('uuid', uuid, { expires: new Date("8/28/2023"), httpOnly: true });
          res.status(302);
          res.redirect(url.format({
            pathname:"/",
            query: {
               "name": results[0].name,
               "guests": results[0].guests
             }
          }));
        } else {
          res.status(303);
          res.redirect('/');
        }
      }
    });
  },
  put: function (req, res) {
    models.invitees.update(req.body, function(err, results) {
      if (err) {
        res.statusCode = 400;
        res.end(JSON.stringify(err));
      } else {
        res.statusCode = 200;
        res.end(JSON.stringify(results));
      }
    });
  }
}