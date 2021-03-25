import React from 'react';
import TableOfResults from '../../components/table';
import {Button, Container} from 'reactstrap';
import Fade from 'react-reveal/Fade';
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
      {
        tableData ? 
          <Fade duration={1000} delay={100}>
            <TableOfResults searchResult={searchResult} tableData={tableData} />
          </Fade> :
          <Fade duration={2500} delay={150}>
            <h3 className="text-center mt-4 header">Select Matches, Teams or Players to continue...</h3>
          </Fade>
      }
  </Container>
  )
}

export default LandingPage