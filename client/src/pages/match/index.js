import React, {useEffect, useState} from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
import {Container, Row, Col} from 'reactstrap';
import BarChart from '../../components/barChart';
import PieChart from '../../components/pieChart';


const MatchPage = (props) => {
  const [statData, setStatData] = useState();
  const {id} = props.match.params

  useEffect(() => {
    const getAsync = async () => {
      const response = await axios.post('http://localhost:9000/api/getStatsById', {id: id})
      setStatData(response.data)
    }
    getAsync()
  }, [id])

  return (
    <Container>
      
      <Row>
        <Col md="8">
        <div style={{height: 500}}><BarChart /></div>
        </Col>
        <Col md="4">
        <div style={{height: 500}}><PieChart /></div>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(MatchPage);