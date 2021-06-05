// import React from 'react'
import "../../../css/Projects/Form/form.css";
// import CardTeam from './CardTeam';
import check from "../../../assets/images/check.svg";
import arrow from "../../../assets/images/arrow.svg";

import React, { Component } from "react";
import CardTeam from "./CardTeam";
import { hackathonSubmit, isAuthenticated } from "../../../auth";
import { NavLink } from "react-router-dom";

export default class Confirm extends Component {
  onSubmitHandler = (event) => {
    event.preventDefault();
    const { user } = isAuthenticated();
    const hackathon = this.props.values;
    hackathonSubmit(hackathon, user._id)
      .then((response) => console.log(response))
      .catch((err) => console.log("[ERROR]", err));
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        TeamName,
        TeamLeader,
        RollNo,
        Branch,
        Email,
        AddDescription,
        MemberName,
        MemberRollNo,
        MemberBranch,
        MemberEmail,
        MemberName1,
        MemberRollNo1,
        MemberBranch1,
        MemberEmail1,
        MemberName2,
        MemberRollNo2,
        MemberBranch2,
        MemberEmail2,
      },
    } = this.props;

    return (
      <div className="addform">
        <div className="container">
          <h1 className="heading">Confirm Registration</h1>
          <div className="main-container">
            <div className="details">
              <h1 className="main-head">{TeamName}</h1>
              <div className="leader-details">
                <div className="l-sec">
                  <div className="details-sec">
                    <p className="head">Team Leader: </p>
                    <span className="ans">{TeamLeader}</span>
                  </div>
                  <div className="details-sec">
                    <p className="head">Roll Number: </p>
                    <span className="ans">{RollNo}</span>
                  </div>
                  <div className="details-sec">
                    <p className="head">Branch: </p>
                    <span className="ans">{Branch}</span>
                  </div>
                </div>
                <div className="column">
                  <p className="head">Summary: </p>
                  <span className="ans">{AddDescription}</span>
                </div>
              </div>
              <h1 className="team">Your team</h1>
              <div className="cards">
                <CardTeam
                  name={MemberName}
                  rno={MemberRollNo}
                  branch={MemberBranch}
                  email={MemberEmail}
                />
                <CardTeam
                  name={MemberName1}
                  rno={MemberRollNo1}
                  branch={MemberBranch1}
                  email={MemberEmail1}
                />
                <CardTeam
                  name={MemberName2}
                  rno={MemberRollNo2}
                  branch={MemberBranch2}
                  email={MemberEmail2}
                />
              </div>
        
              <button className="nextpage" onClick={(e)=>{
                this.onSubmitHandler(e);
                this.continue(e)
              }}>
                Confirm
                <img src={check} alt="" />
              </button>
              <button className="nextpage prev" onClick={this.back}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
