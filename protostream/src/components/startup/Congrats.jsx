import React from 'react'
import "./css/congrats.css"
import congrats from '../../assets/images/congrats.svg'

function Congrats() {
    return (
      <div className="congrats">
        <div className="container">
          <h1 className="head">Yay ! Congratulations</h1>
          <img src={congrats} alt="" />
          <p className="subhead">
            Your startup is now Verified by TBI KIET, start working on your
            dreams now
          </p>
          <button className="btn">Dashboard</button>
        </div>
      </div>
    );
}

export default Congrats
