import React from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import Navbar from '../Navbar';

export class Login extends React.Component{

    state = {
        username: '',
        password: '',
        logResult: 0,
        dispError: 0
    };

    constructor(props){
        super(props);

        this.passwordChange = this.passwordChange.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.getData = this.getData.bind(this);
    }

    usernameChange(e) {
        this.setState({
            username: e.target.value
        })
    };

    passwordChange(e) {
        this.setState({
            password: e.target.value
        })
    };

    getData (dataType) {
        return axios.get('/^api/' + dataType)
        .then(response => {
            this.response = response.data
            return this.response
        })
    };

    handleLogin(e) {
        e.preventDefault();
        this.state.dispError = 0;
        this.state.logResult = 0;
        var user = this.state.username;
        var pass = this.state.password;
        this.getData("volunteers").then(data => {
            const vol = data;
            for (let i = 0; i < vol.count; i++) {
                if (vol.results[i].name === user && vol.results[i].password === pass) {
                    localStorage.setItem('userID', vol.results[i].id);
                    localStorage.setItem('userType', 'vol');
                    this.state.logResult = 1;   
                    this.setState({
                        logResult: 1,
                        dispError: this.state.dispError + 1
                    })         
                }
            }
            this.setState({
                dispError: this.state.dispError + 1
            })
        })
        this.getData("organizations").then(data => {
            const org = data;
                for (let i = 0; i < org.count; i++) {
                    if (org.results[i].name === user && org.results[i].password === pass) {
                        localStorage.setItem('userID', org.results[i].id);
                        localStorage.setItem('userType', 'org');
                        this.setState({
                            logResult: 2
                        })
                    }
                }
            this.setState({
                dispError: this.state.dispError + 1
            })
        })        
    }

    render(){
        return(
        <div className="all">
            <div className="login">
                <div className = "h1">Login</div>
                {this.state.logResult === 1 && <p className = 'valid'> Welcome, Volunteer. </p>}
                {this.state.logResult === 2 && <p className = 'valid'> Welcome, Organisation Representative. </p>}
                {this.state.dispError === 2 && <p className = 'invalid'> Error: Incorrect combination of username and password. Please try again. </p>}
                <form className="form" onSubmit = {this.handleLogin}>
                    <input type="text" required="required" placeholder="UserName" name="u" value = {this.state.username} onChange = {this.usernameChange}></input>  
                    <input type="password" required="required" placeholder="Password" name="p" value = {this.state.password} onChange = {this.passwordChange}></input>  
                    <button className="but" method = 'post'>Login</button>
                </form>
                {(this.state.logResult === 1 || this.state.logResult === 2) && 
                    <Redirect to={{
                        pathname: '/',                            
                    } && console.log("test")}                            
                    />}
        </div>
        </div>)
    }
     
}