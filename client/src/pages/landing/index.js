import React, {useState} from 'react';
import TableOfResults from '../../components/table';
import {Button, Container} from 'reactstrap'
import axios from 'axios';

const LandingPage = ({searchResult}) => {
  const [data, setData] = useState();
  
  const handleClick = async(e) => {
    const apiQuery = e.target.name;
    const result = await axios.get(`http://localhost:9000/api/${apiQuery}`)
    setData(result.data)
  }
  console.log(data)

  return (
  <Container className="pt-4">
    <Button
      onClick={handleClick}
      className="mr-1"
      name='getMatchData'>Get all Matches
    </Button>
    <Button
      onClick={handleClick}
      className="mr-1"
      name='getPlayerData'>Get all Players
    </Button>
    <Button
      onClick={handleClick}
      name='getTeamData'>Get all Teams
    </Button>
    <TableOfResults searchResult={searchResult} tableData={data}/>
  </Container>
  )
}

export default LandingPage