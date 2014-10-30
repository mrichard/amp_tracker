var express = require('express');
var router = express.Router();
var path = require('path');
var mainController = require('../controllers/mainController');

router.get('/', mainController.handleIndex);

module.exports = router;