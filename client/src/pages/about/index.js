import React from 'react';
import {Container} from 'reactstrap';

const AboutPage = () => {

  return (
    <Container className="mt-5 text-center">
      <h2 className="mb-4">How To Use This App...</h2>
      <div className=" text-left">
        <ul>
          <li>Click the buttons to Get lists of matches, Teams and players</li>
          <li>Choose a match, team or player from the populated table</li>
          <li>See various insights and metrics related to the choosen match, team or player.</li>
          <li>Use the drop-down to filter the match or team by player.</li>
        </ul>
      </div>
    </Container>
  )
}

export default AboutPage;