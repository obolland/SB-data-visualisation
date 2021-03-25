var express = require('express');
var router = express.Router();
var statData = require('../public/stat-data.json');

router.get('/', function(req, res, next) {
  res.json(statData);
});

module.exports = router;