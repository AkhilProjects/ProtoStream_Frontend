import React from 'react'
import congo from '../assets/images/congo.svg'
import home from "../assets/images/home.svg";
import './congo.css'

function Congo() {
    return (
      <div className="congo">
        <div className="head">Yay ! Congratulations</div>
        <img src={congo} alt="" />
        <div className="sub-head">
          Your startup is now Verified by TBI KIET, start working on your dreams
          now
        </div>
        <button className="done">DashBoard <img src={home} alt=""/></button>
      </div>
    );
}

export default Congo
