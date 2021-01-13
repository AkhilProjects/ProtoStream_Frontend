import React, {useContext, useState} from "react";
import "../../css/Projects/listcard.css";

function Listcard({ project_name, description, branch, members, id }) {
  const [active, setActive] = useState(false)
  const showModal = () => {
    setActive(true);
  }
  const hideModal = () => {
    setActive(false);
  }
  return (
    <div className="listcard">
      <h1 className="project-name">{project_name}</h1>
      <p className="desc">{description}</p>
      <p className="branch">{branch}</p>
      <p className="members">{members} members</p>
      <button onClick={showModal}>{">"}</button>
      <div className={active ? "modal": "closed"}>
        <button className="close" onClick={hideModal}>+</button>
        <h1 className="title">{id}</h1>
        <div className="details">
          <div className="left">
            <div className="details-sec">
              <p className="head">Team Leader: </p>
              <span className="ans">Karan Chopra</span>
            </div>
            <div className="details-sec">
              <p className="head">Roll Number: </p>
              <span className="ans">1702910144</span>
            </div>
            <div className="details-sec">
              <p className="head">Branch: </p>
              <span className="ans">ME</span>
            </div>
            <div className="details-sec column">
              <p className="head">Summary: </p>
              <span className="ans">
                Creating Reusable Rockets for space exploration and
                transportation of supplies and sending satellites to the orbit
              </span>
            </div>
          </div>
          <div className="right">
            <div className="details-sec column">
              <p className="head">Team Members Details: </p>
              <ul>
                <li>Akshay 170234749 Me</li>
                <li>Akshay 170234749 Me</li>
                <li>Akshay 170234749 Me</li>
              </ul>
            </div>
            <div className="details-sec">
              <p className="head">Submission Date: </p>
              <span className="ans">17/05/2021</span>
            </div>
            <div className="details-sec">
              <p className="head">Prize/Award won: </p>
              <span className="ans">-NA-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listcard;
