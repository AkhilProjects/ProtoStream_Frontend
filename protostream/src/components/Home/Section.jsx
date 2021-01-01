import React from "react";
import {} from "../../css/Homepage/section.css";

function Section({ heading, subHeading, classname, span, btnText, imageSrc }) {
  return (
    <div>
      <div className={classname}>
        <div className="container">
          <div className="hero-details">
            <h1 className="heading">{heading}</h1>
            <p className="sub-head">{subHeading}</p>
            <div className="span">{span}</div>
            <button className="btn">{btnText}</button>
          </div>
          <div className="hero-image">
            <img src={imageSrc} alt="" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
