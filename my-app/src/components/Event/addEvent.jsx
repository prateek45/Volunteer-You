import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import './addEvent.css'

export class addEvent extends React.Component  {

    state = {
      title: '',
      numVol: 1,
      date: 0,
      image: '',
      descr: '',
      orgName: '',
      contact: '',
      location: '',
      submitted: 0
    };
    //constructor with binds for functions
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeNumVol = this.changeNumVol.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.changeDescr = this.changeDescr.bind(this);
        this.changeLoc = this.changeLoc.bind(this);
        this.changeContact = this.changeContact.bind(this);
    }

    async componentDidMount(){
      console.log(localStorage.getItem('userID'));
      const id = localStorage.getItem('userID');
      axios.get('/api/organizations').then(res =>{
        const results = res.data.results;
        console.log(results);
        for (var i in results) {
          if (results[i].id == id ) {
            this.setState({
              orgName: results[i].id
            })

          }
        }
      })     
    }

    changeTitle(e) {
      this.setState({
          title: e.target.value
      })
    }

    changeNumVol(e) {
      this.setState({
          numVol: e.target.value
      })
    }

    changeDate(e) {
      this.setState({
          date: e.target.value
      })
    }

    changeImage(e) {
      console.log(e.target.files)
      this.setState({
          image: e.target.files
      })
    }

    changeDescr(e) {
      this.setState({
          descr: e.target.value
      })
    }

    changeContact(e) {
      this.setState({
          contact: e.target.value
      })
    }

    changeLoc(e) {
      this.setState({
        location: e.target.value
      })
    }
    handleSubmit(e) {
      //Prevent default button actions.
      e.preventDefault();
      //Declare current username/pass as variables for ease of access.
      const title = this.state.title;
      const numVol = parseInt(this.state.numVol);
      const date = this.state.date;
      const descr = this.state.descr;
      const org = parseInt(this.state.orgName);
      const location = this.state.location;
      const contact = this.state.contact;
      const image = this.state.image;
      if (!image || !title || !numVol || !descr || !location || !contact) {
        alert('Please Fill the required fields with *');
      }
      console.log(title)
      console.log(typeof(numVol))
      console.log(date)
      console.log(descr)
      console.log(typeof(org))
      console.log(location)
      console.log(contact)
      console.log(image)

      let formData = new FormData();
      formData.append('title', title);
      formData.append('slug', numVol);
      formData.append('description', descr);
      formData.append('organization', org);
      formData.append('location', location);
      formData.append('photo', image[0]);
      formData.append('contact', contact);

      axios.post(`/api/events/`, formData
      ).then(response => {
          console.log(response.data);
          this.setState({
            submitted: 1
          })
      })
      .catch(function (error) {
        console.log(error);
      })
     
    }

  render(){
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Add Event</title>
        <h1 className="addEvent">Add Event *</h1>
        <div className="body1">
          <fieldset className="section">
            <div className="form-row">
              <h2 className="title1">Event Name *</h2>
              <div className="form-value" id="postad-title">
                <input
                  type="text"
                  name="event"
                  className="info-input"
                  placeholder="Event name..."
                  onChange = {this.changeTitle} />
                <br />
              </div>
            </div>
          </fieldset>
          <fieldset className="section">
            <div className="form-row">
              <h2 className="title1">Contact Details *</h2>
              <div className="form-value" id="postad-title">
                <input
                  type="text"
                  name="event"
                  className="info-input"
                  placeholder="Contact Details"
                  onChange = {this.changeContact} />
                <br />
              </div>
            </div>
          </fieldset>
          <fieldset className="section">
            <div className="form-row">
              <h2 className="title1">Location *</h2>
              <div className="form-value" id="postad-title">
                <input
                  type="text"
                  name="event"
                  className="info-input"
                  placeholder="Location"
                  onChange = {this.changeLoc} />
                <br />
              </div>
            </div>
          </fieldset>
          <fieldset className="section">
            <div className="form-row">
              <h2 className="title1">Number of participan *</h2>
              <input className='number' type="number" min={0} max={10000} step={1} defaultValue={1} onChange={this.changeNumVol}/>
            </div>
          </fieldset>
          <fieldset className="section">
            <div className="form-row">
              <h2 className="title1">Event Date *</h2>
              <input className='date' type="date" defaultValue="2021-03-30" onChange = {this.changeDate}/>
            </div>
          </fieldset>
          <fieldset className="section">
            <div className="form-row">
              <h2 className="title1">Description *</h2>
              <div className="form-value">
                <textarea
                  className="info-textarea"
                  rows={10}
                  cols={50}
                  placeholder="Text here..."
                  defaultValue={""}
                  onChange={this.changeDescr} />
              </div>
            </div>
          </fieldset>
          <fieldset className="section">
            <div className="form-row">
              <h2 className="title1">Upload Photos</h2>
              <p className="pstad-image-help">
                We recommend choosing <strong>landscape</strong> images for best
                results.
              </p>
              <ul id="loading-files" />
              <div className="fileupload-container">
                <div id="upload_btn" className="button2">
                  <div>
                    <input
                      className='imgupd'
                      type="file"
                      name="image"
                      id="upMultilImages"
                      multiple="multiple"
                      accept="image/*" 
                      onChange = {this.changeImage}/>
                    <div id="picViewsBox" />
                  </div>
                </div>
                <input
                  type="hidden"
                  name="images"
                  defaultValue
                  className="postad-image-url" />
              </div>
            </div>
          </fieldset>
          <div className='cont'> 
          <button
            className="button1"
            type="button"
            onClick={this.handleSubmit}
          >
            Add now
          </button>
          </div>
        </div>
        {(this.state.submitted === 1) && <Redirect to={{ 
          pathname: '/',
          }}
          />}

      </div>
    );
  }
}

