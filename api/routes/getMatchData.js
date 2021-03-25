var express = require('express');
var router = express.Router();
var matchData = require('../public/match-data.json');

router.get('/', function(req, res, next) {
  res.json(matchData);
});

module.exports = router;