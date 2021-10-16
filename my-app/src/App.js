import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SearchResults from './pages/search';
import { Login } from './components/Login/index';
import data from './components/Event/data';
import EventCard from'./components/Event/EventCard';
import OrganisationSignUp from './components/signup/OrganisationSignUp'
import VolunteerSignUp from './components/signup/VolunteerSignUp'

function App() {

  return (
    <><Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/signin' component={Login} />
        <Route path='/search/*' component={SearchResults} />
        <Route path='/sign-up' component={VolunteerSignUp} />
        <Route path='/sign-up-org' component={OrganisationSignUp} />
      </Switch>
    </Router></>
  );
}

export default App;
