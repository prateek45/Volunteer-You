import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class OrganisationSignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false
    };

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
    const subEmail = this.state.email;
    const subOrg = this.state.organisation;
    axios.post('/^api/organizations/', {
      name: subUsername,
      password: subPassword,
      email: subEmail,
      Organization: subOrg,
    })
    .then(function (response) {      
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response);
    })
  }

  render() {
    return (
      <div className="formCenter">
        <h1> Organisation Sign Up </h1>
        <Link to="/sign-up-vol" className="formFieldLink">
          Click here to sign up as a volunteer
        </Link>
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
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link to="/signin" className="formFieldLink">
              I'm already a member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default OrganisationSignUp;
