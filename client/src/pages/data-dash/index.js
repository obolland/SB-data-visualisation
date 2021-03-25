import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
import {Container, Row, Col} from 'reactstrap';
import Header from '../../components/header';
import BarChart from '../../components/barChart';
import PieChart from '../../components/pieChart';
import LineChart from '../../components/lineChart';



const DashboardPage = ({match, pageName}) => {
  const [statData, setStatData] = useState();
  const [playerNames, setPlayerNames] = useState([]);
  const {id} = match.params;
  const pageTitle = pageName && pageName.replace(/get|Data/gi, '');

  useEffect(() => {
    const getStatsAsync = async () => {
      const res = await axios.post('http://localhost:9000/api/getStatsById', {id: id})
      setStatData({
        barData: res.data.barData,
        pieData1: res.data.pieData1,
        pieData2: res.data.pieData2
      })
    }; getStatsAsync()

    const getNamesAsync = async () => {
      const resp = await axios.post('http://localhost:9000/api/getPlayerNamesById', {id: id})
      setPlayerNames(resp.data)
    }; getNamesAsync()
  }, [id])

  const handleFilterClick = (e) => {
    const {name} = e.target
    filterChartsByPlayer(name)
  }

  const filterChartsByPlayer = async (name) => {
    const res = await axios.post('http://localhost:9000/api/getMatchPlayerAndId', {name: name, id: id})
    setStatData({
      barData: res.data.barData,
      pieData1: res.data.pieData1,
      pieData2: res.data.pieData2
    })
  }


  return (
    <>
      <Header playerNames={playerNames} handleFilterClick={handleFilterClick} />
        <Container className='text-center'>
          { statData &&
            <>
              <h1 className='mt-4'>{pageTitle} Data Dashboard</h1>
              <h3>{pageTitle} ID - {id}</h3>
              <div className="mb-4" style={{height: 500}}><BarChart data={statData.barData}/></div>
              <Row>
                <Col md="6">
                  <div style={{height: 500}}><PieChart data={statData.pieData1}/></div>
                </Col>
                <Col md="6">
                  <div style={{height: 500}}><PieChart data={statData.pieData2}/></div>
                </Col>
              </Row>
              <div style={{height: 500}}><LineChart /></div>
            </>
          }
        </Container>
    </>
  )
}

export default withRouter(DashboardPage);