import React from "react";
import "../css/error.css";
import homeicon from "../assets/images/home.svg";
import Boy from "../assets/images/boy.svg";
import jupiter from "../assets/images/jupiter.svg";
import {NavLink} from "react-router-dom"

function ErrorPage({error_name, error_msg}) {
  return (
    <div className="errorpage">
      <div className="box">
        <div className="image">
          <img src={Boy} alt="" className="boy" />
        </div>
        <div className="details">
          <h2 className="sub-head">ERROR</h2>
          <h1 className="main-head">{error_name}!</h1>
          <p className="para">{error_msg}</p>
          <NavLink to="/user/dashboard">
            <button className="btn">
              Go to Home <img src={homeicon} alt="" />
            </button>
          </NavLink>
        </div>
        <div className="image">
          <img src={jupiter} alt="" className="jupiter" />
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
