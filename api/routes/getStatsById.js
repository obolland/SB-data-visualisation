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

  // const lineData = [
  //   {
  //     "id": id,
  //     "color": "hsl(37, 70%, 50%)",
  //     "data": [
  //       {
  //         "x": "0",
  //         "y": 73
  //       },
  //       {
  //         "x": "100",
  //         "y": 248
  //       },
  //       {
  //         "x": "200",
  //         "y": 89
  //       },
  //       {
  //         "x": "300",
  //         "y": 158
  //       },
  //       {
  //         "x": "400",
  //         "y": 271
  //       },
  //       {
  //         "x": "500",
  //         "y": 202
  //       },
  //       {
  //         "x": "600",
  //         "y": 78
  //       },
  //       {
  //         "x": "700",
  //         "y": 292
  //       },
  //       {
  //         "x": "800",
  //         "y": 39
  //       },
  //       {
  //         "x": "900",
  //         "y": 227
  //       },
  //       {
  //         "x": "1000",
  //         "y": 264
  //       },
  //       {
  //         "x": "1100",
  //         "y": 24
  //       }
  //     ]
  //   }
  // ]

  //goals per match
  //each data point is a match
  //order matches by date
  //map matches into data points
  //no of goals for that match += goals from last data point

 
  const combinedData = {barData, pieData1, pieData2}

  res.json(combinedData);
});

module.exports = router;