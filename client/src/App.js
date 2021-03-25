import React, {useState} from 'react';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/landing';
import DashboardPage from './pages/data-dash';
import AboutPage from './pages/about';

const App = () => {
  const [tableData, setTableData] = useState();
  const [buttonName, setButtonName] = useState();

  //handleClick from matches, teams and players buttons
  const handleClick = async(e) => {
    const apiQuery = e.target.name;
    setButtonName(apiQuery);
    const result = await axios.get(`http://localhost:9000/api/${apiQuery}`)
    setTableData(result.data)
  }

  return (
    <div>
        {/* <GlobalStyles /> */}
        <Switch>
          <Route exact path='/'  render={props => (<LandingPage {...props} handleClick={handleClick} tableData={tableData} />)}/>
          <Route path="/about" component={AboutPage} />
          <Route path="/match/:id" render={props => (<DashboardPage {...props} pageName={buttonName} />)}/>
          <Route path="/team/:id" render={props => (<DashboardPage {...props} pageName={buttonName} />)} />
          <Route path="/player/:id" render={props => (<DashboardPage {...props} pageName={buttonName} />)} />
        </Switch>
      </div>
  );
}

export default App;
