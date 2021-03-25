var express = require('express');
var router = express.Router();
var statData = require('../public/stat-data.json');
var playerData = require('../public/player-data.json');

router.post('/', function(req, res, next) {
  const name = req.body.name;
  const id = parseInt(req.body.id)

  //find any objects matching the id
  const data = (id) => {
    return statData.filter(obj => Object.values(obj).includes(id))
  };

  //get id of player from name. We are filtering by this player
  let playerId;
  function getPlayersId(name) {
      playerData.forEach(obj => {
      if (obj.player_name == name) playerId = obj.player_id
    })
  };  getPlayersId(name)

  //return the player stats based on players ID
  let player;
  function getPlayer(id) {
      data(id).forEach(obj => {
      if (obj.player_id == id) player = obj;
    })
  }; getPlayer(playerId)


  const { shots, tackles, goals, passes, interceptions,
          completed_passes, pressures
        } = player;
  
  //map data for various charts
  const barData = [
    {
      "stats": "shots/goals",
      "Shots": shots,
      "Goals": goals,
    },
    {
      "stats": "tackles",
      "Tackles": tackles,
    },
    {
      "stats": "interceptions",
      "Interceptions": interceptions,
    },
    {
      "stats": "pressures",
      "Pressures": pressures,
    }
  ]

  const pieData1 = [
    {
      "id": "Passes",
      "value": passes
    },
    {
      "id": "Completed Passes",
      "value": completed_passes
    }
  ]

  const pieData2 = [
    {
      "id": "Shots",
      "value": shots
    },
    {
      "id": "Goals",
      "value": goals
    }
  ]

  //combine data into one object to return
  const combinedData = {barData, pieData1, pieData2}

  res.json(combinedData);
});

module.exports = router;