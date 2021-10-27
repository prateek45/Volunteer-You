import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export class Profile extends React.Component{
    
    state = {
        usertype: localStorage.getItem('userType'),
        userID: localStorage.getItem('userID'),
        data: [],
        events: [],
        isLoading: true
    }

    constructor(props){
        super(props);


    }

    async componentDidMount() {
        const usertype = this.state.usertype
        const userID = this.state.userID
        if (usertype == 'vol') {
            axios.get('api/volunteers').then(res => {
                const data = res.data
                console.log(data)
                for (let i = 0; i < data.count; i++) {
                    if (data.results[i].id == userID) {
                        this.setState({
                            data: data.results[i],
                            isLoading: false
                        })
                    }
                }
            })
            .catch(error => {
                console.log(error);
            })
            axios.get('api/events').then(res => {
                const data = res.data
                var events = []
                for (let i = 0; i < data.count; i++) {
                    const rosterLen = data.results[i].roster.length
                    console.log(userID)
                    console.log(data.results)
                    for (let j = 0; j < data.count; j++) {
                        if (data.results[i].roster[j] == localStorage.getItem('userName')) {
                            events.push(data.results[i])
                            this.setState({
                                events: events
                            })    
                        }
                    }
                }              
            })
            .catch(error =>{
                console.log(error);
            })
        } else if (usertype == 'org') {
            axios.get('api/organizations').then(res => {
                const data = res.data
                for (let i = 0; i < data.count; i++) {
                    if (data.results[i].id == userID) {
                        this.setState({
                            data: data.results[i],
                            isLoading: false
                        })
                    }
                }
            })
            .catch(error => {
                console.log(error);
            })
            axios.get('api/events').then(res => {
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
        if (this.state.isLoading) {
            return("Loading...");
        }
        else {
            console.log(this.state)
            const events = this.state.events

            const data = this.state.data
            console.log(data);
            const photo = data.Profile_photo;
            console.log(photo);
            var imageDirectory = '';
            if (photo == null) {
                imageDirectory = "/media/profile/default.png"
            }
            else {
                const image_Name = photo.split(/[/://]+/);
                imageDirectory = "/media/profile/" + image_Name[5];
            }
            console.log(imageDirectory)
            console.log(events)
            //const image = data.Profile_photo
            //const image_Name = image.split(/[/://]+/)
            //const imageDirectory = "/media/profile/" + image_Name[5];

            return(
            <div className="box">
                <div className="box1">
                    <div className="user1">
                        <div className="userB">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img src={imageDirectory} alt="Admin" className="rounded-circle" width="150"></img>
                                <div className="mt-3">
                                <h4>{data.name}</h4>
                                <p>{data.profession}</p>
                                {this.state.usertype == 'org' && <p>{data.Organization}</p>}
                                {this.state.usertype == 'vol' && <p>{data.address}</p>}
                                </div>
                            </div>
                            <div className="bb">
                                <Link to='/editprofile' className="but">Edit</Link>
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
                                {data.name}
                            </div>
                        </div>

                        <hr />
                        <div className="card">
                            <div className="title">
                                <h5>Age</h5>
                            </div>
                            <div className="inf">
                                {data.age}
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
                                {data.contact}
                            </div>
                        </div>
                        <hr />
                       
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
                                    <h5> <strong>Current Roster:</strong> {event.roster.join(", ")} </h5>
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

}
