import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Redirect} from "react-router-dom";
import axios from 'axios';
import './vsp.css'

class VolunteerSignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      signedup: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    /**
     * Handle any changes in the forms fields and
     * updates the state variables accordingly
     */
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    /**
     * On submit checks if the all the req fields are correctly filled
     */
    event.preventDefault();
    console.log("The form was submitted with the following data:");
    console.log(this.state);
    const subUsername = this.state.username;
    const subPassword = this.state.password;
    const subPassword2 = this.state.password2;
    const subEmail = this.state.email;

    console.log(subPassword);
    if (subPassword === subPassword2) {
      let formData = new FormData();
      formData.append('name', subUsername);
      formData.append('email', subEmail);
      formData.append('password', subPassword);

      axios.post('/api/volunteers/', formData)
      .then(response => {      
        console.log(response);
        this.setState({
          signedup: 1
        })
        
      })
      .catch(function (error) {
        console.log(error);
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
        <h1 className='head'> Volunteer Sign Up </h1>
        
        <form className="formFields" onSubmit={this.handleSubmit}>
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
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
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
              name="password2"
              value={this.state.password2}
              onChange={this.handleChange}
            />
          </div>
        

          <div className="formField">
          <Link to="/sign-up-org" className="formFieldLink">
          Click here to sign up as an organisation
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

export default VolunteerSignUp;
