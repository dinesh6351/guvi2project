import React, { Component } from "react";
import { useState } from "react";
export default class UpdateDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
          userData: "",
        };
        this.handleSubmit=this.handleSubmit.bind(this)
      }
      ondochange(value){
        this.setState({
          fname:value
        })
        
      }

      
      
      componentDidMount() {
        fetch("http://localhost:5000/userData", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userData");
            this.setState({ userData: data.data });
          });
      }
      handleSubmit(e){
        e.preventDefault();
        
        window.location.href="./userDetails"
      }
      render() {
        return (
          <form action="/update" onSubmit={this.handleSubmit}>
  <h3>Update Profile</h3>

<div className="mb-3">
  <label>First name</label>
  <input
    type="text"
    className="form-control"
    placeholder="First name"
    value={this.state.userData.fname}
    onChange={(e) => this.setState(e.target.value )}
  />
</div>

<div className="mb-3">
  <label>Last name</label>
  <input
    type="text"
    className="form-control"
    placeholder="Last name"
    value={this.state.userData.lname}
    onChange={(e) => this.setState({ lname: e.target.value })}
  />
</div>

<div className="mb-3">
  <label>Email address</label>
  <input
    type="email"
    className="form-control"
    placeholder="Enter email"
    value={this.state.userData.email}
    onChange={(e) => this.setState({ email: e.target.value })}
  />
</div>


<div className="mb-3">
  <label>Age</label>
  <input
    type="text"
    className="form-control"
    placeholder="Age"
    value={this.state.userData.age}
    onChange={(e) => this.setState({ age: e.target.value })}
  />
</div>
<div className="mb-3">
  <label>Phone Number</label>
  <input
    type="text"
    className="form-control"
    placeholder="Phone Number"
    value={this.state.userData.phoneno}
    onChange={(e) => this.setState({ phoneno: e.target.value })}
  />
</div>
   
<div className="d-grid">
          <button type="submit" className="btn btn-primary">
           Update
          </button>
        </div>
          </form>
    
        );
      }
    }
