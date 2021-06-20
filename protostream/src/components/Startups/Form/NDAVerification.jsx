import React, { useEffect, useState } from "react";
import "../css/Ndaverify.css";
import { Link, NavLink } from "react-router-dom";

import fly from "../../../assets/images/fly.svg";
import clock from "../../../assets/images/clock.svg";
import hourglass from "../../../assets/images/hourglass.svg";
import complete from "../../../assets/images/complete.svg";
import { fetchNda, isAuthenticated } from "../../../auth/index";
function NDAVerification() {
  // const [aprooved, setAprooved] = useState(true);
  const [values, setValues] = useState({
    NDA: [],
    dataLoaded: false,
  });

  const { NDA } = values;

  const preload = () => {
    const userId = isAuthenticated().user._id;

    if (!values.dataLoaded) {
      fetchNda(userId)
        .then((response) => {
          setValues({
            ...NDA,
            NDA: response,
            dataLoaded: true,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    setValues({ ...values });
    preload();
  }, []);

  return (
    <div className="Nda-verify">
      <h1 className="heading">NDA Verification</h1>
      <div className="container">
        <div className="sub-head">Non Disclosure Agreement </div>
        <div className="startup-container">
          <div className="head">Your Startups</div>
          <div className="all-startups">
            {NDA.map((nda) => {
              return (
                <Startup
                  key={nda._id}
                  name={nda.StartupName}
                  isApproved={nda.VerifyByTBI}
                  ndaId={nda._id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Startup({ name, isApproved, ndaId }) {
  return (
    <div className="startup-card">
      <div className="sec">
        <img
          src={isApproved ? complete : hourglass}
          alt=""
          className="status-icon"
        />
        <p className="startup-name">{name}</p>
      </div>
      <p className="status">
        {isApproved
          ? " Your NDA has been Approved by TBI"
          : " Your NDA has been sent for Approval to the TBI"}
      </p>
      {isApproved ? (
        <NavLink
          className="navlink"
          to={{
            pathname: "/Startups/Startup-form",
            state: { ndaId: ndaId },
          }}
        >
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

export default NDAVerification;
