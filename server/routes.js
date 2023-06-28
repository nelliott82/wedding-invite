var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/admin', controller.admin.get);

router.post('/admin', controller.admin.post);

router.delete('/admin', controller.admin.delete);

module.exports = router;