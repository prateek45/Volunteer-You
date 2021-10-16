import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import OrganisationSignUp from "./signup/OrganisationSignUp";
import VolunteerSignUp from "./signup/VolunteerSignUp";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="appAside" />
          <div className="appForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-up"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Volunteer
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="pageSwitcherItem-active"
                className="pageSwitcherItem"
              >
                Organisation
              </NavLink>
            </div>

            <div className="formTitle">
              {" "}
              Sign Up as{" "}
              <NavLink
                to="/sign-up"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Volunteer
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Organisation
              </NavLink>
            </div>

            <Route exact path="/" component={OrganisationSignUp} />
            <Route path="/sign-up" component={VolunteerSignUp} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
