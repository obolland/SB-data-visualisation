import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router";
import Fade from 'react-reveal/Fade';
import {Container, Row, Col} from 'reactstrap';
import Header from '../../components/header';
import {getStats, getNames, matchPlayerWithId} from '../../actions/';
import BarChart from '../../components/barChart';
import PieChart from '../../components/pieChart';
import LineChart from '../../components/lineChart';


const DashboardPage = ({ match, pageName }) => {
  const [statData, setStatData] = useState();
  const [playerNames, setPlayerNames] = useState([]);
  const {id} = match.params;
  const pageTitle = pageName && pageName.replace(/get|Data/gi, '');

  useEffect(() => {
    getStats(id)
    .then(res => {
      setStatData({
        barData: res.barData,
        pieData1: res.pieData1,
        pieData2: res.pieData2
      })
    })

    getNames(id)
    .then(res => {
      setPlayerNames(res)
    })
  }, [id])

  //handleClick passed to to the player filter button in the dashboard
  const handleFilterClick = (e) => {
    const {name} = e.target
    filterChartsByPlayer(name)
  }

  const filterChartsByPlayer = async (name) => {
    matchPlayerWithId(name, id)
    .then(res => {
      setStatData({
        barData: res.barData,
        pieData1: res.pieData1,
        pieData2: res.pieData2
      })
    })
  }


  return (
    <>
      <Header playerNames={playerNames} handleFilterClick={handleFilterClick} />
      <Fade duration={1000} delay={100}>
        <Container className='text-center'>
          { statData &&
            <>
              <h1 className='mt-4'>{pageTitle} Data Dashboard</h1>
              <h3>{pageTitle} ID - {id}</h3>
              <div className="mb-4" style={{height: 500}}><BarChart data={statData.barData}/></div>
              <Row>
                <Col md="6">
                  <div style={{height: 500}}>
                    <PieChart data={statData.pieData1} colour={{scheme: "nivo"}} />
                  </div>
                </Col>
                <Col md="6">
                  <div style={{height: 500}}>
                    <PieChart data={statData.pieData2} colour={{scheme: "category10"}} />
                  </div>
                </Col>
              </Row>
              <div style={{height: 500}}><LineChart /></div>
            </>
          }
        </Container>
      </Fade>
    </>
  )
}

export default withRouter(DashboardPage);