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
        user: '',
        userType: localStorage.getItem('userType'),
        userID: localStorage.getItem('userID'),
        isLoading: true
    }

    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    async componentDidMount() {
        const id = this.state.userID;
        const userType = this.state.userType;
        if (userType == 'org') {
            axios.get('/api/organizations').then(res =>{
                const data = res.data.results.filter(event => event.id == id)[0]
                this.setState({
                    user: data,
                    name: data.name,
                    email: data.email,
                    age: data.age,
                    contact: data.contact,
                    Profile_photo: data.Profile_photo,
                    isLoading: false
                })
            })
        } else{
            axios.get('/api/volunteers').then(res =>{
                const data = res.data.results.filter(event => event.id == id)[0]
                this.setState({
                    user: data,
                    name: data.name,
                    email: data.email,
                    age: data.age,
                    contact: data.contact,
                    Profile_photo: data.Profile_photo,
                    isLoading: false
                })
            })
        }
    }

    handleChange(event) {
        /**
         * Handle any changes in the forms fields and
         * updates the state variables accordingly
         */
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
        /**
         * On submit of the edited fields, it post a PUT request to Users profile.
         */
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
            axios.put('/api/volunteers/' + userID + '/', formData)
            .then(res=> {
                console.log(res)
            })
            .catch(error=> {
                console.log(error.response.data)
            })
        } else if (userType == 'org') {
            axios.put('/api/organizations/' + userID + '/', formData)
            .then(res=> {
                console.log(res)
            })
            .catch(error=> {
                console.log(error.response.data)
            })
        }
        
    }

  
    render(){
        if (this.state.isLoading) {
            return("Loading");
        }
        else {
            const photo = this.state.Profile_photo;
            console.log(photo);
            var imageDirectory = '';
            if (photo == null) {
                imageDirectory = "/media/profile/default.png"
            } else {
                const image_Name = photo.split(/[/://]+/);
<<<<<<< HEAD
                console.log(image_Name)
                imageDirectory = "/media/profile/" + image_Name[5];
                console.log(imageDirectory)
=======
                imageDirectory = "/media/profile/" + image_Name[5];
>>>>>>> b7a930e85a0b606cf67377f7e0f2f76aad282ec7
            }
            return(
            <div className="box">
                <div className="box1">
                    <div className="user1">
                        <div className="userB">
                            <div className="d-flex flex-column align-items-center text-center">
                                <div className="mt-3">
                                    <div className="card-body">
                                        <div className="card">
                                            <div id = 'ImageContainer'>
                                                <h4> Profile Image </h4>
                                                <img src={imageDirectory} alt="Admin" className="rounded-circle" width="150"></img>
                                            </div>
                                            <input
                                                type="file"
                                                name="image"
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
                                  placeholder={this.state.name}
                                  name="name"
                                  onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <hr />
                        <div className="card">
                            <div className="title">
                                <h4>Age</h4>
                                <input className='profileForm' type="number" min={0} max={10000} step={1} defaultValue={this.state.age} name = "age" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <hr />
                        <div className="card">
                            <div className="title">
                                <h4>Email</h4>
                                <input
                                  className="profileForm"
                                  placeholder={this.state.email}
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
                                  placeholder={this.state.contact}
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

}
