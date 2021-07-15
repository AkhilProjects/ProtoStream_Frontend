import React from "react";
import "./css/Step.css";
import { NavLink } from "react-router-dom";
import { isAuthenticated, otp } from "../../auth";

function Step({ head, subHead, link, icon, isdisabled, isStepOne }) {
  const onClickStep1Handler = () => {

    const user = isAuthenticated().user._id;
  
    if (isStepOne) {
      
      console.log("inside stepOne");
      otp(user)
        .then((data) => {})
        .catch((err) => console.log(err));
    }
  };
  return (
    <NavLink
      onClick={onClickStep1Handler}
      to={`/startups/${link}`}
      className={isdisabled ? "disabled" : "step-link"}
    >
      {isdisabled ? (
        <div className="center">
          <h1 className="heading">This Step is Completed</h1>
        </div>
      ) : (
        <div className="step">
          <h1 className="heading">{head}</h1>
          <p className="sub-head">{subHead}</p>
          <img src={icon} alt="" className="icon" />
        </div>
      )}
    </NavLink>
  );
}

export default Step;
