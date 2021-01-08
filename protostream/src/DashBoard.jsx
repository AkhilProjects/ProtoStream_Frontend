import React from "react";
import "./css/DashBoard/dashboard.css";
import profile from "./assets/images/profile.svg";
import Box from "./components/Dashboard/Box";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="Container">
        <div className="side-bar">
          <img className="student-img" src={profile} alt="student-imh" />
          <h4 className="name">Himanshu Pandey</h4>
          <p className="student"> Branch</p>
          <p className="student">session</p>

          <button className="log-out" >
            <i class="fas fa-sign-out-alt"></i> Log Out
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
