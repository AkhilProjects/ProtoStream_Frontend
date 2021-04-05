import React from "react";
import "../../css/Homepage/startup.css";
import roxet from '../../assets/images/roxet.svg'
import sploosh from "../../assets/images/sploosh.svg";
import redux from '../../assets/images/redux.svg'
import bookstorm from "../../assets/images/bookstorm.svg";

function Startups() {
  return (
    <div className="startups">
      <div className="heading">Startups</div>
      <div className="container">
        <div className="box">
          <img src={roxet} alt="" className="startup-icon" />
          <span>Roxet</span>
        </div>
        <div className="box">
          <img src={sploosh} alt="" className="startup-icon" />
          <span>Sploosh</span>
        </div>
        <div className="box">
          <img src={redux} alt="" className="startup-icon" />
          <span>Redux Motors</span>
        </div>
        <div className="box">
          <img src={bookstorm} alt="" className="startup-icon" />
          <span>BookStorm</span>
        </div>
      </div>
    </div>
  ); 
}

export default Startups;
