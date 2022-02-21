const router = require('express').Router();
const api = require('./api');
const user = require('./user');

router.use('/api', api);
router.use('/user', user);

module.exports = router;
