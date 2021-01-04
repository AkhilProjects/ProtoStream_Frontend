import React from "react";
import "../css/error.css";
import homeicon from "../assets/images/home.svg";
import Boy from "../assets/images/boy.svg";
import jupiter from "../assets/images/jupiter.svg";

function ErrorPage() {
  return (
    <div className="errorpage">
      <div className="box">
        <div className="image">
          <img src={Boy} alt="" className="boy" />
        </div>
        <div className="details">
          <h1 className="main-head">404</h1>
          <h2 className="sub-head">ERROR</h2>
          <p className="para">
            Looks like we can't find what you are looking for
          </p>
          <button className="btn">
            Go to Home <img src={homeicon} alt="" />
          </button>
        </div>
        <div className="image">
          <img src={jupiter} alt="" className="jupiter" />
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
