import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom';

import Header from './components/header';
import LandingPage from './pages/landing';
import matchPage from './pages/match';
import PlayerPage from './pages/player';
import TeamPage from './pages/team';

function App() {
  //const [data, setData] = useState();

  // useEffect(() => {
  //   const getAllData = async() => {
  //     const response = await axios.get('http://localhost:9000/api/getAllData')
  //     const data = response.data;
  //     setData(data);
  //   }

  // }, [])

  return (
    <div>
        {/* <GlobalStyles /> */}
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/match' component={matchPage} />
          <Route path='/player' component={PlayerPage} />
          <Route path='/team' component={TeamPage} />
        </Switch>
      </div>
  );
}

export default App;
