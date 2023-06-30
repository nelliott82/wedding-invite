const controller = require('./controllers');
const router = require('express').Router();

router.get('/admin/verify', controller.admin.verify);

router.get('/admin/login', controller.admin.login);

router.get('/admin', controller.admin.get);

router.post('/admin', controller.admin.post);

router.delete('/admin', controller.admin.delete);

router.get('/invitees', controller.invitees.get);

router.put('/invitees', controller.invitees.put);

module.exports = router;