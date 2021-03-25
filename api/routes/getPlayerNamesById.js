var express = require('express');
var router = express.Router();
const statData = require('../public/stat-data.json');
const playerData = require('../public/player-data.json');

router.post('/', function(req, res, next) {
  const id = parseInt(req.body.id);

  //filter statData to return object that includes id
  const data = (id) => {
    return statData.filter(obj => Object.values(obj).includes(id))
  }

  //returns player ids from result of previous function 
  const playerIds = data(id).map(obj => {
    return obj.player_id
  })

  //contains names of players filtered by id
  let playerNames = []
  function players() { playerIds.forEach(num => {
      playerData.forEach(obj => {
      if (obj.player_id == num) playerNames.push(obj.player_name)
      })
    })
  }
  players()

  res.send(playerNames);
});

module.exports = router;