import React, {useState} from 'react'
import "../css/Ndaverify.css";
import {NavLink} from 'react-router-dom' 
import fly from '../../../assets/images/fly.svg'
import clock from '../../../assets/images/clock.svg'
import hourglass from '../../../assets/images/hourglass.svg'
import complete from '../../../assets/images/complete.svg'

function NDAVerification() {
    const [aprooved, setAprooved] = useState(true);

    return (
      <div className="Nda-verify">
        <h1 className="heading">NDA Verification</h1>
        <div className="container">
          <div className="sub-head">Non Disclosure Agreement </div>
          <div className="startup-container">
              <div className="head">Your Startups</div>
              <div className="all-startups">
                <Startup name="name1" isApproved={aprooved}/>
                <Startup name="name2" isApproved={aprooved}/>
                <Startup name="name3" isApproved={false}/>
              </div>
          </div>
        </div>
      </div>
    );
}

function Startup({name, isApproved}) {
    return (
      <div className="startup-card">
        <div className="sec">
          <img src={isApproved ? complete : hourglass} alt="" className="status-icon" />
          <p className="startup-name">{name}</p>
        </div>
        <p className="status">
          {isApproved
            ? " Your NDA has been Approved by TBI"
            : " Your NDA has been sent for Approval to the TBI"}
        </p>
        {isApproved ? (
          <NavLink to="/Startups/Startup-form" className="navlink">
            <button className="btn">
              Go for Startup <img src={fly} alt="" />
            </button>
          </NavLink>
        ) : (
          <button className="btn">
            Request Again <img src={clock} alt="" />
          </button>
        )}
      </div>
    );
}

export default NDAVerification
