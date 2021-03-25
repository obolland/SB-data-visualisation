var express = require('express');
var router = express.Router();
var playerData = require('../public/player-data.json');

router.get('/', function(req, res, next) {
  res.json(playerData);
});

module.exports = router;