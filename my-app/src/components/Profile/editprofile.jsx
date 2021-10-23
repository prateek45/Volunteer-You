import React from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export class EditProfile extends React.Component{
    
    state = {
        name: '',
        age: 18,
        email: '',
        contact: '',
        image: '',
        userType: localStorage.getItem('userType'),
        userID: localStorage.getItem('userID')
    }

    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(event) {
        console.log(event);
        let target = event.target;
        let value;
        let name = target.name;
        if (target.type === "file") {
            value = target.files
        } else {
            value = target.type === "checkbox" ? target.checked : target.value;
        }
        
        this.setState({
          [name]: value
        });
      }

    handleEdit(e) {
        e.preventDefault();
        console.log(this.state);
        
        const name = this.state.name;
        const age = this.state.age;
        const email = this.state.email
        const contact = this.state.contact;
        const userType = this.state.userType;
        const userID = this.state.userID;
        const image = this.state.image;

        let formData = new FormData();
        formData.append('name', name);
        formData.append('age', age);
        formData.append('email', email);
        formData.append('contact', contact);
        formData.append('Profile_photo', image[0]);

        if (userType == 'vol') {
            axios.post('/api/volunteers/' + userID + '/', formData)
            .then(res=> {
                console.log(res)
            })
            .catch(error=> {
                console.log(error.response.data)
            })
        }
    }

  
    render(){

        return(
        <div className="box">
            <div className="box1">
                <div className="user1">
                    <div className="userB">
                        <div className="d-flex flex-column align-items-center text-center">
                            <div className="mt-3">
                                <div className="card-body">
                                    <div className="card">
                                        <div className="Image">
                                            <h4> Profile Image </h4>
                                            <img src = {""} alt = {"profile_image"}></img>
                                        </div>
                                        <input
                                            type="file"
                                            name="image"
                                            id="upMultilImages"
                                            multiple="multiple"
                                            accept="image/*" 
                                            onChange = {this.handleChange}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bb">
                            <Link to='/profile' className="but">Cancel Changes</Link>
                            <a className="but" onClick = {this.handleEdit} >Confirm Changes</a>
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
                              className="profileForm"
                              placeholder="Enter your name"
                              name="name"
                              onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="card">
                        <div className="title">
                            <h4>Age</h4>
                            <input className='profileForm' type="number" min={0} max={10000} step={1} defaultValue={18} name = "age" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <hr />
                    <div className="card">
                        <div className="title">
                            <h4>Email</h4>
                            <input
                              className="profileForm"
                              placeholder="Enter your email"
                              name="email"
                              onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="card">
                        <div className="title">
                            <h4>Phone</h4>
                            <input
                              className="profileForm"
                              placeholder="Enter your mobile number"
                              name="contact"
                              onChange={this.handleChange}
                            />
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