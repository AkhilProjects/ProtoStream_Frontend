import React from "react";
import "../../css/Homepage/prototyping.css";
import prototyping from "../../assets/images/prototyping.png";
import { NavLink } from "react-router-dom";

const Prototyping = () => {
  return (
    <div className="prototyping-page">
      <div className="prototyping-page-container">
        <div className="hero-details">
          <h1 className="hero-heading">Prototyping to Product</h1>
          <p className="sub-head">
            Register your Idea and create complete product timelines with custom
            comments and messages that define your project state and stage and
            get mentorship in the journey of creating the final product.
          </p>
          <span>
            From Business Plan to Prototypes to Product , we’ll get you covered.
          </span>
          <NavLink to="/projects" className="buttons">
            <button className="learn-more">Learn more</button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img src={prototyping} alt="" className="prototyping-image" />
        </div>
      </div>
    </div>
  );
};

export default Prototyping;
