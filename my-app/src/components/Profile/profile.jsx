import React from "react";



export class Profile extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="box">
            <div className="box1">
                <div className="user1">
                    <div className="userB">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"></img>
                            <div className="mt-3">
                            <h4>John Doe</h4>
                            <p>Full Stack Developer</p>
                            <p>Bay Area, San Francisco, CA</p>
                            <div className="bb">
                                <button className="but">Follow</button>
                            <button className="but">Message</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="user1"> 
                    <ul className="ul1">
                        <li>
                        <h6 className="title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter mr-2 icon-inline text-info">
                                <path 
                                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                                />
                                
                                </svg>
                                Twitter</h6>
                                <span className="a1">@lin</span>
                        </li>
                        <hr />
                        <li>
                        <h6 className="title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>Instagram</h6>
                        <span className="a1">lin</span>
                        </li>
                        <hr />
                        <li>
                                <h6 className="title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</h6>
                                <span className="a1">lin</span>
                            </li>
                    </ul>
                </div>
            </div>
            <div className="box2">
            <div className="user">
                <div className="card-body">
                    <div className="card">
                        <div className="title">
                            <h5>Full Name</h5>
                        </div>
                        <div className="inf">
                            id
                        </div>
                    </div>

                    <hr />
                    <div className="card">
                        <div className="title">
                            <h5>Age</h5>
                        </div>
                        <div className="inf">
                            23
                        </div>
                    </div>
                    <hr />
                    <div className="card">
                        <div className="title">
                            <h5>Email</h5>
                        </div>
                        <div className="inf">
                            jianqi.lin@uq.net.au
                        </div>
                    </div>
                    <hr />
                    <div className="card">
                        <div className="title">
                            <h5>Phone</h5>
                        </div>
                        <div className="inf">
                            0416811238
                        </div>
                    </div>
                    <hr />
                   
                </div>
            </div>
            <div className="user">
                <div className="card-body">
                    <div className="fav">
                        <h4>Volunteer experience</h4>
                    </div>
                </div>
            </div>
            <div className="user">
                <div className="card-body">
                    <div className="fav">
                        <h4>My Application</h4>
                        <div className="event">
                        <img src={require('../../images/tree.jpg')} alt='eventPic' />
                            <h5>Volunteer activities for planting trees.</h5>
                            <span className="inf">Location: sunnybank, Brisbane</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )}

}