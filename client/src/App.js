import React, {useState} from 'react';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom';

import Header from './components/header'
import LandingPage from './pages/landing';
import DashboardPage from './pages/data-dash';

const App = () => {
  const [tableData, setTableData] = useState(); console.log(tableData);
  const [formData, setFormData] = useState({search: ''});
  const [searchResult, setSearchResult] = useState();
  const [buttonName, setButtonName] = useState();


  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:9000/getSearch', formData)
    const searchResult = response.data
    setSearchResult(searchResult);
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleClick = async(e) => {
    const apiQuery = e.target.name;
    console.log(apiQuery)
    setButtonName(apiQuery);
    const result = await axios.get(`http://localhost:9000/api/${apiQuery}`)
    setTableData(result.data)
  }

  return (
    <div>
        {/* <GlobalStyles /> */}
        <Header formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
        <Switch>
          <Route exact path='/'  render={props => (<LandingPage {...props} searchResult={searchResult} handleClick={handleClick} tableData={tableData} />)}/>
          <Route path="/match/:id" render={props => (<DashboardPage {...props} pageName={buttonName} />)}/>
          <Route path="/team/:id" render={props => (<DashboardPage {...props} pageName={buttonName} />)} />
          <Route path="/player/:id" render={props => (<DashboardPage {...props} pageName={buttonName} />)} />
        </Switch>
      </div>
  );
}

export default App;
