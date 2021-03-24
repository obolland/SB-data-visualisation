import React, {useState} from 'react';
import TableOfResults from '../../components/table';
import {Button, Container} from 'reactstrap'
import axios from 'axios';

const LandingPage = ({searchResult, handleClick, tableData}) => {

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
    <TableOfResults searchResult={searchResult} tableData={tableData}/>
  </Container>
  )
}

export default LandingPage