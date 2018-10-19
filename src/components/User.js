import React from "react";
import {Link} from "react-router-dom"

const user = props => {
  return (
    <div className="card blue-grey darken-1" key={props.id}>
      <div className="card-content white-text">
        <span className="card-title">Full Name: {props.name}</span>
        <p>User ID: {props.id}</p>
      </div>
      <div className="card-panel blue-grey darken-1">
        <Link className="card-content yellow-text" to={{pathname:"/quest", state:{userid: props.id} }}>Quests</Link>
      </div>
    </div>
  );
};

export default user;
