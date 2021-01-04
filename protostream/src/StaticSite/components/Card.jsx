import React from "react";
import "../css/pics.css";
import { NavLink } from "react-router-dom";

function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <h1 className="heading">Please Login to continue</h1>
        <NavLink to="/login" className="buttons">
          <button className="btn">Login</button>
        </NavLink>{" "}
      </div>
    </div>
  );
}

export default Card;
