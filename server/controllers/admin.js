const models = require('../models');

module.exports = {
  verify: function (req, res) {
    const uuid = req.params.uuid || req.cookies.uuid;
    models.admin.verify(uuid, function(err, results) {
      if (err) {
        res.statusCode = 400;
        res.end(JSON.stringify(err));
      } else {
        res.statusCode = 200;
        res.cookie('uuid', uuid, { expires: new Date("8/28/2023"), httpOnly: true });

        if (results[0].hashword) {
          const sessionEnds = new Date(results[0].session_ends);
          const now = new Date();
          if (now > sessionEnds) {
            res.json({
              login: true
            });
          } else {
            res.json({
              login: false
            });
          }
        } else {
          res.json({
            login: true
          });
        }
      }
    });
  },
  login: function (req, res) {
    models.admin.login(req.body, function(err, results) {
      if (err) {
        res.statusCode = 400;
        res.end(JSON.stringify(err));
      } else {
        res.statusCode = 200;
        res.end(JSON.stringify(results));
      }
    });
  },
  get: function (req, res) {
    console.log('admin get: ', req.params);
    models.admin.getAll(req.params, function(err, results) {
      if (err) {
        res.statusCode = err === 500 ? err : 400;
        res.end(JSON.stringify(err));
      } else {
        res.statusCode = 200;
        res.end(JSON.stringify(results));
      }
    });
  },
  post: function (req, res) {
    const data = { ...req.body, ...req.cookies };

    models.admin.insert(data, function(err, results) {
      if (err) {
        res.statusCode = 400;
        res.end(JSON.stringify(err));
      } else {
        res.statusCode = 200;
        res.end(JSON.stringify(results));
      }
    });
  },
  delete: function (req, res) {
    const uuid = req.cookies.uuid;
    const data = { id: req.params.id, uuid };

    models.admin.delete(data, function(err, results) {
      if (err) {
        res.statusCode = 400;
        res.end(JSON.stringify(err));
      } else {
        res.statusCode = 200;
        res.end(JSON.stringify(results));
      }
    });
  },
}