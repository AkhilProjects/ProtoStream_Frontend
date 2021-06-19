import React from "react";
import "./css/Step.css";
import { NavLink } from "react-router-dom";
import { isAuthenticated, otp } from "../../auth";

function Step({ head, subHead, link, icon, isdisabled }) {
  const onClickStep1Handler = () => {
    const user = isAuthenticated().user._id;
    console.log(user);
    otp(user)
      .then((data) => {})
      .catch((err) => console.log(err));
  };
  return (
    <NavLink
      onClick={onClickStep1Handler}
      to={`/startups/${link}`}
      className={isdisabled ? "disabled" : "step-link"}
    >
      <div className="step">
        <h1 className="heading">{head}</h1>
        <p className="sub-head">{subHead}</p>
        <img src={icon} alt="" className="icon" />
      </div>
    </NavLink>
  );
}

export default Step;
