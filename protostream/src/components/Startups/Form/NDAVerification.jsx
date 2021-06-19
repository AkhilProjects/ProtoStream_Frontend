import React, {useState} from 'react'
import "../css/Ndaverify.css";
import {NavLink} from 'react-router-dom' 

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
          <img src="" alt="" className="status-icon" />
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
              Go for Startup <img src="" alt="" />
            </button>
          </NavLink>
        ) : (
          <button className="btn">
            Request Again <img src="" alt="" />
          </button>
        )}
      </div>
    );
}

export default NDAVerification
