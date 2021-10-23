import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SearchVanilla from './pages/search';
import { Login } from './components/Login/index';
import OrganisationSignUp from './components/signup/OrganisationSignUp';
import VolunteerSignUp from './components/signup/VolunteerSignUp';
import event from './components/Event/event';
import {addEvent} from './components/Event/addEvent';
import { Profile, EditProfile } from "./components/Profile/index";
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
        <Route path='/search/*' component={SearchVanilla} />
        <Route path='/sign-up-vol' component={VolunteerSignUp} />
        <Route path='/sign-up-org' component={OrganisationSignUp} />
        <Route path='/event/:id' component={event}/>
        <Route path='/myevents' component={addEvent}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/editprofile' component={EditProfile}/>
      </Switch>
    </Router></>
  );
}

export default App;
