import React, { Component } from "react";
import axios from "axios";
import Quest from "../components/Quest";
import {Link} from 'react-router-dom';

class UserQuest extends Component {
  state = {
    usersQuest: [],
    error: false
  };

  componentWillMount() {
    axios
      .get("http://localhost:5000/questpathways")
      .then(res => {
        this.setState({ usersQuest: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
  }

  noUserHandler = () => {
    this.props.history.push("/");
  }
  render() {
    let renderQuest = (
      <p style={{ textAlign: "center" }}>Use data is not available!</p>
    );
    if (this.props.location.state) {
      this.state.usersQuest.forEach(quest => {
        if (quest.user_id === this.props.location.state.userid) {
          renderQuest = quest.quest_paths.map(q => {
            return (
              <Quest
                key={q.order}
                orderId={q.order}
                questId={q.quest.id}
                questName={q.quest.name}
                submitted={q.mark.submitted}
                completion={q.mark.completion}
                mark={q.mark.mark}
              />
            );
          });
        } 
      });
    } else this.noUserHandler();
    return (
    <div className="container">
    {renderQuest}
    <div className="fixed-action-btn">
        <Link className="btn-floating btn-large red" to="/">
          <i style={{fontSize:"small"}}>back</i>
        </Link>
    </div>
    </div>);
  }
}

export default UserQuest;
