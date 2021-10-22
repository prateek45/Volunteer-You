import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {Redirect} from "react-router-dom";

class OrganisationSignUp extends Component {
  
  state = {
    email: "",
    password: "",
    password2: "",
    username: "",
    signedup: 0
    };
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
    const subUsername = this.state.username;
    const subPassword = this.state.password;
    const subPassword2 = this.state.password2;
    const subEmail = this.state.email;
    const subOrg = this.state.organisation;
    if (subPassword === subPassword2) {
      axios.post('/^api/organizations/', {
        name: subUsername,
        password: subPassword,
        email: subEmail,
        Organization: subOrg,
      })
      .then(response => {      
        console.log(response);
        this.setState({
          signedup: 1
        })
      })
      .catch(function (error) {
        console.log(error.response);
      })
    } else {
      console.log("Wrong Password")
    }
  }

  render() {
    return (
  
      <div className="formCenter">
          {this.state.signedup === 1 && 
                    <Redirect to={{
                        pathname: '/signin',                            
                    }}                            
                    />}
        <h1 className='head'> Organisation Sign Up </h1>
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel" htmlFor="username">
              Username
            </label>
            <input
              type="username"
              id="username"
              className="formFieldInput"
              placeholder="Enter your username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">

            <label className="formFieldLabel" htmlFor="organisation">
              organisation name
            </label>
            <input
              type="organisation"
              id="organisation"
              className="formFieldInput"
              placeholder="Enter the organisation name"
              name="organisation"
              value={this.state.organisation}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter the email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              id="password2"
              className="formFieldInput"
              placeholder="ReEnter your password"
              name="password"
              value={this.state.password2}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
          <Link to="/sign-up-vol" className="formFieldLink">
          Click here to sign up as a volunteer
        </Link>
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link to="/signin" className="formFieldLink1">
              I'm already a member
            </Link>
          </div>
        </form>
        {(this.state.signedup === 1) && <Redirect to={{ 
          pathname: '/',
          }}
          />}
      </div>
    );
  }
}
export default OrganisationSignUp;
