import React from "react";
import "./css/DashBoard/dashboard.css";
import profile from "./assets/images/profile.svg";
import Box from "./components/Dashboard/Box";
import { isAuthenticated, signout } from "./auth";
import {Redirect} from "react-router-dom";




const Dashboard = () => {
  const {user} = isAuthenticated();
  const {Profilename,ProfileID,ProfileBranch,ProfileYear} = user.profiledata;


  
  return (
    <div className="dashboard">
      <div className="Container">
        <div className="side-bar">
          <img className="student-img" src={profile} alt="student-imh" />
          <h4 className="name">{Profilename}</h4>
          <p className="student"> {ProfileBranch}</p>
          <p className="student">{ProfileYear}</p>

          <button className="log-out" onClick={() =>{
            signout(() =>{
              return <Redirect to="/"/>
            })
          }} >
            <i className="fas fa-sign-out-alt"></i> Log Out
          </button>
        </div>

        <div className="content">
          <Box heading="My Projects" para="Your projects and startups" />
          <Box
            heading="Resource Box"
            para="Your curated list of tools and business courses to help you along
            the journey"
          />
          <Box
            heading="Learn Entrepreneurship"
            para="Enroll into Entrepreneurship courses at MIT OCW"
          />
          <div className="reg">
              <h2>Register a Startup</h2>
              <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;