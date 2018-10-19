import React, { Component } from "react";
import axios from "axios";
import User from "../components/User";


class Dashboard extends Component {
  state = {
    users: [],
    error: false
  };
  
  componentDidMount() {
    axios
      .get("http://localhost:5000/users")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
  }
  render() {
    let users = <p style={{ textAlign: "center" }}>Something went wrong!!!</p>;
    if (!this.state.error) {
      users = this.state.users.map(user => {
        return <User key={user.id} id={user.id} name={user.fullname}/>;
      });
    }
    return <div className="container">{users}</div>;
  }
}

export default Dashboard;
