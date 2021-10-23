import React from "react";
import axios from "axios";


export class Profile extends React.Component{
    
    state = {
        usertype: localStorage.getItem('userType'),
        userID: localStorage.getItem('userID'),
        data: [],
        events: []
    }

    constructor(props){
        super(props);


    }

    async componentDidMount() {
        const usertype = this.state.usertype
        const userID = this.state.userID
        if (usertype == 'vol') {
            axios.get('^api/volunteers').then(res => {
                const data = res.data
                for (let i = 0; i < data.count; i++) {
                    if (data.results[i].id == userID) {
                        this.setState({
                            data: data.results[i]
                        })
                    }
                }
            })
            .catch(error => {
                console.log(error);
            })
            axios.get('^api/events').then(res => {
                const data = res.data
                var events = []
                for (let i = 0; i < data.count; i++) {
                    if (data.results[i].organization == userID) {
                        events.push(data.results[i])
                        this.setState({
                            events: events
                        })    
                    }
                }              
            })
            .catch(error =>{
                console.log(error);
            })
        } else if (usertype == 'org') {
            axios.get('^api/organizations').then(res => {
                const data = res.data
                for (let i = 0; i < data.count; i++) {
                    if (data.results[i].id == userID) {
                        this.setState({
                            data: data.results[i]
                        })
                    }
                }
            })
            .catch(error => {
                console.log(error);
            })
            axios.get('^api/events').then(res => {
                const data = res.data
                var events = []
                for (let i = 0; i < data.count; i++) {
                    if (data.results[i].organization == userID) {
                        events.push(data.results[i])
                        this.setState({
                            events: events
                        })    
                    }
                }
                
            })
            .catch(error =>{
                console.log(error);
            })
        }
    }

    render(){
        console.log(this.state.data)
        //console.log(this.state.events)
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
                            <p>Bay Area, San Francisco, CA</p>
                            </div>
                        </div>
                    </div>
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
                            {data.email}
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
                        <h4>{this.state.usertype == 'org' && 'Organisation'}
                        {this.state.usertype == 'vol' && 'Volunteer'} Experience:</h4>
                    </div>
                </div>
            </div>
            <div className="user">
                <div className="card-body">
                    <div className="fav">
                        {this.state.usertype == 'org' && <h4>Events I'm Managing</h4>}
                        {this.state.usertype == 'vol' && <h4>Events I'm Participating In</h4>}
                        {events.map((event) => (
                            <div id = "eventCard">
                                <h5> <strong>Event:</strong> {event.title} </h5>
                                <h5> <strong>Current Roster:</strong> {event.roster} </h5>
                                <h5> <strong>Remaining Slots:</strong> {event.slots} </h5>
                                <span className="loc">Location: {event.location}</span>
                                <hr />
                            </div>

                        ))}
                    </div>
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