var express = require('express');
var router = express.Router();
var matchData = require('../public/match-data.json');
var playerData = require('../public/player-data.json');
var teamData = require('../public/team-data.json');
var statData = require('../public/stat-data.json');

/* GET all data. */
router.get('/', function(req, res, next) {

  var data = {matchData: matchData, playerData: playerData, statData: statData, teamData: teamData}
  res.json(data);
});

module.exports = router;