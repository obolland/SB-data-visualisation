var express = require('express');
var router = express.Router();
const statData = require('../public/stat-data.json')
var fakeStats = [
  {
    "match_id": 7175951,
    "team_id": 468241,
    "player_id": 14810,
    "minutes_played": 96.25,
    "team_possession_percentage": 0.42,
    "xg": 0,
    "shots": 2,
    "goals": 0,
    "tackles": 0,
    "interceptions": 0,
    "pressures": 0,
    "passes": 27,
    "completed_passes": 15,
    "left_foot_passes": 1,
    "right_foot_passes": 12,
    "player_shots_faced": 7
  },
  {
    "match_id": 7175951,
    "team_id": 468240,
    "player_id": 17198,
    "minutes_played": 30.82,
    "team_possession_percentage": 0.58,
    "xg": 0.09,
    "shots": 1,
    "goals": 1,
    "tackles": 0,
    "interceptions": 0,
    "pressures": 9,
    "passes": 13,
    "completed_passes": 11,
    "left_foot_passes": 2,
    "right_foot_passes": 8,
    "player_shots_faced": 0
  }
]

router.post('/', function(req, res, next) {
  const {id} = req.body

  // const data = (id) => {
  //   return statData.filter(obj => Object.values(obj).includes(id))
  // }

  let shots = 0;
  let tackles = 0;
  let goals = 0;
  let passes = 0;
  let interceptions = 0;
  let completed_passes = 0;
    
  fakeStats.forEach(obj => {
    shots += obj.shots;
    tackles += obj.tackles;
    goals += obj.goals;
    passes += obj.passes;
    interceptions += obj.interceptions;
    completed_passes += obj.completed_passes;
  })
  
  const barData = [
    {
      "stats": "shots",
      "number of": shots,
    },
    {
      "stats": "goals",
      "number of": goals,
    },
    {
      "stats": "tackles",
      "number of": tackles,
    },
    {
      "stats": "interceptions",
      "number of": interceptions,
    }
  ]

  const pieData = [
    {
      "id": "Passes",
      "value": passes
    },
    {
      "id": "Completed Passes",
      "value": completed_passes
    }
  ]

  
  const combinedData = {barData, pieData}

  res.json(combinedData);
});

module.exports = router;