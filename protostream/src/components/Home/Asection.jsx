import React from "react";
import "../../css/Homepage/section.css";

function Asection({ heading, subHeading, span, btnText, imageSrc }) {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="hero-image">
            <img src={imageSrc} alt="" className="image" />
          </div>
          <div className="hero-details">
            <h1 className="heading">{heading}</h1>
            <div className="span">{span}</div>
            <p className="sub-head">{subHeading}</p>
            <button className="btn">{btnText}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Asection;
