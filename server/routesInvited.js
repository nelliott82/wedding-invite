const controller = require('./controllers');
const routerInvited = require('express').Router();

routerInvited.get('/:uuid', controller.invitees.get);

module.exports = routerInvited;