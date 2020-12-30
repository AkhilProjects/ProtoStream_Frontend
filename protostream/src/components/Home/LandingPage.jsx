import React from "react";
import "../../css/Homepage/landing.css";
import LandingPagefox from "../../assets/images/LandingPageFox.png";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-container">
        <div className="hero-details">
          {/* <h1 className="hero-heading">
            Building the Future, One Idea at a time.
          </h1> */}
          <div
            class="glitch"
            data-text="Building the Future, One Idea at a time."
          >
            Building the Future, One Idea at a time.
          </div>
          <p className="sub-head">
            Ideas and Dreams are what makes Entrepreneurs different , but those
            dreams turned into reality is what makes the world different.
          </p>
          <span>You know what valuable company is nobody building ?</span>
          <NavLink to="/signup" className="buttons">
            <button className="register">Register</button>
          </NavLink>
        </div>
        <div className="hero-image">
          <div className="circle"></div>
          <img src={LandingPagefox} alt="" className="landing-page-fox" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
