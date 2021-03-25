import React from 'react';
import TableOfResults from '../../components/table';
import {Button, Container} from 'reactstrap'
import './landing.styles.scss';

const LandingPage = ({searchResult, handleClick, tableData}) => {

  return (
  <Container className="pt-4 container">
    <div className="image" >
      <Button
        onClick={handleClick}
        className="mr-1"
        name='getMatchData'>Matches
      </Button>
      <Button
        onClick={handleClick}
        className="mr-1"
        name='getTeamData'>Teams
      </Button>
      <Button
        onClick={handleClick}
        name='getPlayerData'>Players
      </Button>
      </div>
      <TableOfResults searchResult={searchResult} tableData={tableData}/>
  </Container>
  )
}

export default LandingPage