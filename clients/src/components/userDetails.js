import React, { Component } from "react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
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
    }).then((res) => res.json()).then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  handleSubmit(e){
    e.preventDefault();
    window.location.href="./update"
  }
  handleSubmitLogout(e){
    e.preventDefault();
    window.location.href="./sign-in"
  }
  render() {
    return (
      <form action="/update" onSubmit={this.handleSubmit}>
      <div>
        Name<h2>{this.state.userData.fname}  {this.state.userData.lname}</h2>
        Email <h2>{this.state.userData.email}</h2>
        Age <h2>{this.state.userData.age}</h2>
        Phone Number <h2>{this.state.userData.phoneno}</h2>
      </div>
      <br />
      <br />
      <button  type="submit"  className="btn btn-primary update-btn">
            Update
          </button>
         
          <button type="submit"  className="btn btn-primary">
            LogOut
          </button>
          
      </form>

    );
  }
}
