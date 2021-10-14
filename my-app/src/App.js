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
      </Switch>
    </Router><div className="wrapper">
        <h1>Events</h1>
        {data.map((event) => (
          <EventCard 
          additional={event.additional}
          diet={event.diet}
          key={event.name} 
          name={event.name}
          scientificName={event.scientificName}
          size={event.size}/>

        ))}
      </div></>
  );
}

export default App;
