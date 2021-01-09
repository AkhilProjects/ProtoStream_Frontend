import React from "react";
import "../../../css/Projects/Form/form.css";
import check from "../../../assets/images/check.svg";
import arrow from "../../../assets/images/arrow.svg";

function Addform() {
  return (
    <div className="addform">
      <div className="container">
        <h1 className="heading">Register Idea</h1>
        <div className="main-container">
          <form>
            <div className="field">
              <label htmlFor="hname">Hackathon Name:</label>
              <input type="text" name="hname" className="input" />
            </div>
            <div className="field">
              <label htmlFor="tname">Team Name:</label>
              <input type="text" name="tname" className="input" />
            </div>
            <div className="field">
              <label htmlFor="tleader">Team Leader:</label>
              <input type="text" name="tleader" className="input" />
            </div>
            <div className="field">
              <label htmlFor="libid">Library id:</label>
              <input type="text" name="libid" className="input" />
            </div>
            <div className="field">
              <label htmlFor="branch">Branch:</label>
              <input type="text" name="branch" className="input" />
            </div>
            <div className="field">
              <label htmlFor="pdomain">Project Domain:</label>
              <input type="text" name="pdomain" className="input" />
            </div>
            <div className="field">
              <label htmlFor="email">Email id:</label>
              <input type="email" name="email" className="input" />
            </div>
            <div className="field mob">
              <label htmlFor="mob">Mobile No.:</label>
              <input type="number" name="mob" className="input" />
            </div>
            <button className="verify">
              Verify Mobile <img src={check} alt="" />
            </button>
          </form>
          <button className="nextpage">
            Team Details <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addform;
