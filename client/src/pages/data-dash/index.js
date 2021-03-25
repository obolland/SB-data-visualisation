import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
import {Container, Row, Col} from 'reactstrap';
import Header from '../../components/header';
import BarChart from '../../components/barChart';
import PieChart from '../../components/pieChart';
import LineChart from '../../components/lineChart';



const DashboardPage = ({match, pageName}) => {
  const [statData, setStatData] = useState(); console.log(statData)
  const {id} = match.params;
  const pageTitle = pageName.replace(/get|Data/gi, '');

  useEffect(() => {
    const getAsync = async () => {
      const res = await axios.post('http://localhost:9000/api/getStatsById', {id: id})
      setStatData({
        barData: res.data.barData,
        pieData1: res.data.pieData1,
        pieData2: res.data.pieData2
      })
    }
    getAsync()
  }, [id])


  return (
    <>
      <Header />
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