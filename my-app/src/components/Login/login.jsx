import React from "react";



export class Login extends React.Component{

    state = {
        volunteers: [],
        organisations: [],
        username: '',
        password: '',
        logResult: 0
    };

    constructor(props){
        super(props);

        this.passwordChange = this.passwordChange.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
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


    async componentDidMount() {
        try {
            const vol = await fetch('/^api/volunteers');
            const volJson = await vol.json();
            const org = await fetch('/^api/organizations');
            const orgJson = await org.json();
            this.setState({
                volunteers: volJson,
                organisations: orgJson
            });
        } catch (e) {
            console.log(e);
        }
    }

    handleLogin(e) {
        e.preventDefault();
        this.state.logResult = 0;
        var user = this.state.username;
        var pass = this.state.password;
        var vol = this.state.volunteers;
        var org = this.state.organisations;
        for (let i = 0; i < vol.count; i++) {
            //Address is temp until we add passwords
            if (vol.results[i].name === user && vol.results[i].address === pass) {
                console.log(">")
                this.state.logResult = 1;            }
        }
        for (let i = 0; i < org.count; i++) {
            if (org.results[i].name === user && org.results[i].Organization === pass) {
                this.state.logResult = 2;
            }
        }
        console.log(this.state.logResult);
        if (this.state.logResult === 1) {
            console.log("Valid Volunteer.");
        } else if (this.state.logResult === 2) {
            console.log("Valid Organisation.");
        } else {
            this.setState({
                logResult: -1
            })
            console.log("Invalid User.");
        }

    }

    render(){
        return(
        <div className="all">
            <div className="login">
                <div className = "h1">Login</div>
                {this.state.logResult === 1 && <p className = 'valid'> Welcome, Volunteer. </p>}
                {this.state.logResult === 2 && <p className = 'valid'> Welcome, Organisation Representative. </p>}
                {this.state.logResult === -1 && <p className = 'invalid'> Error: Incorrect combination of username and password. Please try again. </p>}
                <form className="form" onSubmit = {this.handleLogin}>
                    <input type="text" required="required" placeholder="UserName" name="u" value = {this.state.username} onChange = {this.usernameChange}></input>  
                    <input type="password" required="required" placeholder="Password" name="p" value = {this.state.password} onChange = {this.passwordChange}></input>  
                    <button className="but" method = 'post'>Login</button>
                </form>
            </div>
        </div>)
    }
     
}