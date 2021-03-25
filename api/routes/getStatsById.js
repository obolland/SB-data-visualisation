var express = require('express');
var router = express.Router();
const statData = require('../public/stat-data.json')

router.post('/', function(req, res, next) {
  const id = parseInt(req.body.id);

  const data = (id) => {
    return statData.filter(obj => Object.values(obj).includes(id))
  }

  let shots = 0;
  let tackles = 0;
  let goals = 0;
  let passes = 0;
  let interceptions = 0;
  let completed_passes = 0;
  let pressures = 0;
    
  data(id).forEach(obj => {
    shots += obj.shots;
    tackles += obj.tackles;
    goals += obj.goals;
    passes += obj.passes;
    interceptions += obj.interceptions;
    completed_passes += obj.completed_passes;
    pressures += obj.pressures
  })
  
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
 
  const combinedData = {barData, pieData1, pieData2}

  res.json(combinedData);
});

module.exports = router;