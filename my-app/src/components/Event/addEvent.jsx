import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";

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
      this.setState({
          image: e.target.value
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
      const numVol = this.state.numVol;
      const date = this.state.date;
      const descr = this.state.descr;
      const org = this.state.orgName;
      const location = this.state.location;
      const contact = this.state.contact;
      const image = this.state.image;
      console.log(title)
      console.log(numVol)
      console.log(date)
      console.log(descr)
      console.log(org)
      console.log(location)
      console.log(contact)
      console.log(image)
      //Get all current volunteers
      axios.post('/api/events/', {
        title: title,
        description: descr,
        organization: org,
        //date: date,
        slots: numVol,
        location: location,
        contact: contact
      })
      .then(response => {
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
        <h1 className="addEvent">Add Event</h1>
        <div className="body">
          <fieldset className="section">
            <div className="form-row">
              <h2 className="title">Event Name</h2>
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
              <h2 className="title">Contact Details</h2>
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
              <h2 className="title">Location</h2>
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
              <h2 className="title">Number of participants</h2>
              <input type="number" min={0} max={10000} step={1} defaultValue={1} onChange={this.changeNumVol}/>
            </div>
          </fieldset>
          <fieldset className="section">
            <div className="form-row">
              <h2 className="title">Event Date</h2>
              <input type="date" defaultValue="2021-03-30" onChange = {this.changeDate}/>
            </div>
          </fieldset>
          <fieldset className="section">
            <div className="form-row">
              <h2 className="title">Description</h2>
              <div className="form-value form-editor">
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
              <h2 className="title">Upload Photos</h2>
              <p className="pstad-image-help">
                We recommend choosing <strong>landscape</strong> images for best
                results.
              </p>
              <div className="margin-vertical">
                <p />
                We've noticed the image upload is taking a while, likely due to a
                slow connection or large file size. Please be patient while it
                uploads. If the problem persists please consider the options below:
                <ul className="c-padding-horizontal2">
                  <li>Uploading the images one by one</li>
                  <li>Reducing the size of the images</li>
                  <li>Trying another browser</li>
                </ul>
              </div>
              <ul id="loading-files" />
              <div className="fileupload-container">
                <div id="upload_btn" className="button">
                  <h3>Add pictures</h3>
                  <div>
                    <input
                      type="file"
                      name="file"
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
          <button
            className="button1"
            type="button"
            onClick={this.handleSubmit}
          >
            Add now
          </button>
        </div>
        {(this.state.submitted === 1) && <Redirect to={{ 
          pathname: '/',
          }}
          />}
        <style
          dangerouslySetInnerHTML={{
            __html: "\n.addEvent{\n    text-align: center;\n}\nbody {\n\tcolor: rgb(63, 63, 63);\n\tfont-family:'Times New Roman', Times, serif;\n\tfont-size: 15px;\n}\n.button1{\n    -webkit-transition-duration: 0.4s;\n    transition-duration: 0.4s;\n    padding: 15px 28px;\n    text-align: center;\n    background-color: #3d0669;;\n    color:white;\n    border: 2px solid #7f07e2;\n    border-radius:5px;\n    display:block;\n    margin:0 auto;\n }\n.button1:hover {\n background-color:white;\n color:black;\n }\n.form-row{\n     margin:5px 100px;\n }\n\n.info-input{\n    font-family:'Times New Roman', Times, serif;\n}\n.info-textarea {\n    font-family:'Times New Roman', Times, serif;\n    width: 570px;\n    height: 150px;\n    margin-top: 14px;\n    border: 1px solid #DDDDDD;\n    box-sizing: border-box;\n    padding-left: 13px;\n    padding-top: 13px;\n    resize: none;\n    box-shadow: 0px 13px 10px -15px #ccc inset;\n}\ntextarea::-webkit-input-placeholder{\n    color: #999999;\n}\n.section {\n    background-color:rgba(187, 227, 243, 0.87);\n}\n",
          }} />
      </div>
    );
  }
}
