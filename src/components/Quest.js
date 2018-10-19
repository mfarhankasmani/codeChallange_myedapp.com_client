import React from "react";

const quest = props => {
  return (
    <div className="card blue-grey darken-1" key={props.orderId}>
      <div className="card-content white-text">
        <span className="card-title">Order ID: {props.orderId}</span>
        <span>Quest ID: {props.questId}</span>
        <p>Quest Name: {props.questName}</p>
        <p>Submitted: {props.submitted ? "Yes" : "No"}</p>
        <p>Completion: {props.completion}</p>
        <p>Mark: {props.mark}</p>
      </div>
    </div>
  );
};

export default quest;
