import React from "react";


export class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="all">
            <div className="login">
                <div className = "h1">Login</div>
                <div className="form" method="post">
                    <input type="text" required="required" placeholder="UserName" name="u"></input>  
                    <input type="password" required="required" placeholder="Password" name="p"></input>  
                    <button class="but" type="submit">Login</button>
                </div>
            </div>
        </div>)
    }
     
}