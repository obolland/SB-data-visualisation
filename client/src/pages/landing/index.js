import React from 'react';
import TableOfResults from '../../components/table';
import {Button, Container} from 'reactstrap'

const LandingPage = ({searchResult, handleClick, tableData}) => {

  return (
  <Container className="pt-4">
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
    <TableOfResults searchResult={searchResult} tableData={tableData}/>
  </Container>
  )
}

export default LandingPage