import React from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";

export class Login extends React.Component{
    //State with variables for username, password, result of login and value
    //used to determine if error should be displayed.
    state = {
        username: '',
        password: '',
        logResult: 0,
        dispError: 0
    };
    //constructor with binds for functions
    constructor(props){
        super(props);

        this.passwordChange = this.passwordChange.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.getData = this.getData.bind(this);
    }

    //whenever the user modifies the username field, update the state
    //representing that field.
    usernameChange(e) {
        this.setState({
            username: e.target.value
        })
    };

    //whenever the user modifies the passwordfield, update the state
    //representing that field.
    passwordChange(e) {
        this.setState({
            password: e.target.value
        })
    };

    //A function that returns the data from an api depending on input, either
    //volunteer or organisation.
    getData (dataType) {
        return axios.get('/^api/' + dataType)
        .then(response => {
            this.response = response.data
            return this.response
        })
    };

    //A function for handling when someone attempts to log in.
    handleLogin(e) {
        //Prevent default button actions.
        e.preventDefault();
        //Reinitalise state variables.
        this.setState({
            dispError: 0,
            logResult: 0
        })
        //Declare current username/pass as variables for ease of access.
        var user = this.state.username;
        var pass = this.state.password;
        //Get all current volunteers
        this.getData("volunteers").then(data => {
            //For every volunteer, check if user credentials match their credentials.
            const vol = data;
            for (let i = 0; i < vol.count; i++) {
                console.log(pass)
                console.log(vol.results[i].password)
                console.log(vol.results[i].password === pass)
                if (vol.results[i].name === user && vol.results[i].password === pass) {
                    //If so, write their unique userid and usertype (vol in this case) to localStorage
                    localStorage.setItem('userID', vol.results[i].id);
                    localStorage.setItem('userType', 'vol');  
                    //Set logResult to indicate successful login.
                    this.setState({
                        logResult: 1
                    })         
                }
            }
            console.log(this.state.logResult)
            //After checking all volunteers, iterate dispError to indicate volunteers have been checked.
            this.setState({
                dispError: this.state.dispError + 1
            })
        })
        //Same as previous section but for organisations.
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
        //DispError will only be two after checking both volunteers and organisations, and on successful login page should redirect before message is shown.
        //Set username and password onChange functions to modify corresponding state.
        //At the bottom, if the log result is 1 or 2 (ie successful), we redirect back to the index with authentication data stored in localStorage.
        return(
        <div className="all">
            <div className="login">
                <div className = "h1">Login</div>
                
                {this.state.dispError === 2 && <p className = 'invalid'> Error: Incorrect combination of username and password. Please try again. </p>}
                <form className="form" onSubmit = {this.handleLogin}>
                    <input type="text" required="required" placeholder="UserName" name="u" value = {this.state.username} onChange = {this.usernameChange}></input>  
                    <input type="password" required="required" placeholder="Password" name="p" value = {this.state.password} onChange = {this.passwordChange}></input>  
                    <button className="but" method = 'post'>Login</button>
                </form>
                {(this.state.logResult === 1 || this.state.logResult === 2) && 
                    <Redirect to={{
                        pathname: '/',                            
                    }}                            
                    />}
        </div>
        </div>)
    }
     
}