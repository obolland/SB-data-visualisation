import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
import {Container, Row, Col} from 'reactstrap';
import BarChart from '../../components/barChart';
import PieChart from '../../components/pieChart';


const MatchPage = (props) => {
  const [statData, setStatData] = useState(); console.log(statData)
  const {id} = props.match.params

  useEffect(() => {
    const getAsync = async () => {
      const res = await axios.post('http://localhost:9000/api/getStatsById', {id: id})
      setStatData({barData: res.data.barData, pieData: res.data.pieData})
    }
    getAsync()
  }, [id])


  return (
    <Container>
      { statData &&
        <>
          <h1>{props.location.pathname.toString().replace(/[0-9/]/g, '')} statistics</h1>
          <Row>
            <Col md="8">
              <div style={{height: 500}}><BarChart data={statData.barData}/></div>
            </Col>
            <Col md="4">
              <div style={{height: 500}}><PieChart data={statData.pieData}/></div>
            </Col>
          </Row>
        </>
      }
    </Container>
  )
}

export default withRouter(MatchPage);