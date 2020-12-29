import React from "react";
import "../../css/Homepage/hackathons.css";
import { NavLink } from "react-router-dom";

const Hackathon = () => {
  return (
    <div className="Hackathon-page">
      <div className="hackathon-page-container">
        <div className="head-sec">
          <h2 className="head">Participation just got easier</h2>
        </div>
        <div className="sub-head-sec">
          <p className="sub-head">
            Get Details about the latest Inter-College Competitions , Hackathons
            , Programs and Coding Events and Register at your ease
          </p>
          <NavLink to="/internships" className="buttons">
            <button className="hackathons">Hackathons</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
