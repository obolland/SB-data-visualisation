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
        name='getMatchData'>Get Matches
      </Button>
      <Button
        onClick={handleClick}
        className="mr-1"
        name='getPlayerData'>Get Players
      </Button>
      <Button
        onClick={handleClick}
        name='getTeamData'>Get Teams
      </Button>
      </div>
      <TableOfResults searchResult={searchResult} tableData={tableData}/>
  </Container>
  )
}

export default LandingPage