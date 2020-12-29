import React from "react";
import "../../css/Homepage/resources.css";
import Resource from "../../assets/images/Resources.jpg";
import { NavLink } from "react-router-dom";


const Resources = () => {
  return (
    <div className="resources-page">
      <div className="resources-page-container">
        <div className="hero-details">
          <h1 className="hero-heading">The Resource Box</h1>
          <p className="sub-head">
            Didn’t we told you we had a bag full of resources for you to
            prepare, learn and create new techologies and Learn Business and
            Entrepreneurship
          </p>
          <NavLink to="/internships" className="buttons">
            <button className="hackathons">Hackathons</button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img src={Resource} alt="" className="resources-image" />
        </div>
      </div>
    </div>
  );
};

export default Resources;
