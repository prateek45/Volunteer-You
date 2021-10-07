import React from "react";



export class Login extends React.Component{

    state = {
        volunteers: [],
        organisations: [],
        username: '',
        password: '',
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
        console.log("Username is " + this.state.username);
        console.log("Password is " + this.state.password);
        console.log(this.state.volunteers);
        console.log(this.state.organisations);
        var user = this.state.username;
        var pass = this.state.password;
        var vol = this.state.volunteers;
        var org = this.state.organisations;
        var isVol = false;
        var isOrg = false;
        for (let i = 0; i < vol.count; i++) {
            //Address is temp until we add passwords
            if (vol.results[i].name == user && vol.results[i].address == pass) {
                isVol = true;
            }
        }
        for (let i = 0; i < org.count; i++) {
            if (org.results[i].name == user && org.results[i].address == pass) {
                isOrg = true;
            }
        }
        if (isVol) {
            console.log("Valid Volunteer.");
        } else if (isOrg) {
            console.log("Valid Organisation.");
        } else {
            console.log("Invalid User.");
        }

    }

    render(){
        return(
        <div className="all">
            <div className="login">
                <div className = "h1">Login</div>
                <form className="form" onSubmit = {this.handleLogin}>
                    <input type="text" required="required" placeholder="UserName" name="u" value = {this.state.username} onChange = {this.usernameChange}></input>  
                    <input type="password" required="required" placeholder="Password" name="p" value = {this.state.password} onChange = {this.passwordChange}></input>  
                    <button className="but" method = 'post'>Login</button>
                </form>
            </div>
        </div>)
    }
     
}