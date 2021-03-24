import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Switch, Route } from 'react-router-dom';

import Header from './components/header'
import LandingPage from './pages/landing';
import matchPage from './pages/match';
import PlayerPage from './pages/player';
import TeamPage from './pages/team';

function App() {
  // const [data, setData] = useState();
  const [formData, setFormData] = useState({search: ''});
  const [searchResult, setSearchResult] = useState();
  // useEffect(() => {
  //   const getAllData = async() => {
  //     const response = await axios.get('http://localhost:9000/api/getAllData')
  //     const data = response.data;
  //     setData(data);
  //   }

  // }, [])

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

  return (
    <div>
        {/* <GlobalStyles /> */}
        <Header formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />
        <Switch>
          <Route exact path='/'  render={props => (<LandingPage {...props} searchResult={searchResult}/>)}/>
          <Route path='/match' component={matchPage} />
          <Route path='/player' component={PlayerPage} />
          <Route path='/team' component={TeamPage} />
        </Switch>
      </div>
  );
}

export default App;
