const router = require('express').Router();

const apiProducts = require('./products');

router.use('/items' ,apiProducts);

module.exports = router; 