import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export class EditProfile extends React.Component{
    
    state = {
        usertype: localStorage.getItem('userType'),
        userID: localStorage.getItem('userID'),
        data: [],
        events: []
    }

    constructor(props){
        super(props);


    }

    render(){
        console.log(this.state.data)
        console.log(this.state.events)
        const events = this.state.events
        const data = this.state.data
        return(
        <div className="box">
            <div className="box1">
                <div className="user1">
                    <div className="userB">
                        <div className="d-flex flex-column align-items-center text-center">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150"></img>
                            <div className="mt-3">
                            <h4>{data.name}</h4>
                            <p>{data.profession}</p>
                            {this.state.usertype == 'org' && <p>{data.Organization}</p>}
                            {this.state.usertype == 'vol' && <p>{data.address}</p>}
                            </div>
                        </div>
                        <div className="bb">
                            <Link to='/profile' className="but">Cancel Changes</Link>
                            <button to='/profile' className="but">Confirm Changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box2">
            <div className="user">
                <div className="card-body">
                    <div className="card">
                        <div className="title">
                            <h4> Full Name </h4>
                            <input
                              type="name"
                              className="profileForm"
                              placeholder="Enter the organisation name"
                              name="name"
                              value={this.state.organisation}
                              onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="card">
                        <div className="title">
                            <h5>Age</h5>
                        </div>
                    </div>
                    <hr />
                    <div className="card">
                        <div className="title">
                            <h5>Email</h5>
                        </div>
                    </div>
                    <hr />
                    <div className="card">
                        <div className="title">
                            <h5>Phone</h5>
                        </div>
                    </div>
                    <hr />
                   
                </div>
            </div>
            
            
        </div>
        </div>
        )}

}

/*<ul>
          {cards.map((event) => (
            <li key = {event.id} style = {{
              listStyleType: 'none'
              }} >
                
              <EventCard 
            additional={event.additional}
            title={event.title}
            description={event.description} 
            slots={event.slots}
            contact={event.contact}
            location={event.location}
            id={event.id}/>
            </li>
          ))}    
        </ul>*/