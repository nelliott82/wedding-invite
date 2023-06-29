const controller = require('./controllers');
const router = require('express').Router();

router.get('/admin', controller.admin.get);

router.post('/admin', controller.admin.post);

router.delete('/admin', controller.admin.delete);

module.exports = router;