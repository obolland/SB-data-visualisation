var express = require('express');
var router = express.Router();
var teamData = require('../public/team-data.json');

/* GET all data. */
router.get('/', function(req, res, next) {
  res.json(teamData);
});

module.exports = router;