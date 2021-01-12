import React from "react";
import "../../../css/Projects/Form/form.css";
import check from "../../../assets/images/check.svg";
import arrow from "../../../assets/images/arrow.svg";

function Addform({ formData, setForm, navigation }) {
  const {
    HackathonName,
    TeamName,
    TeamLeader,
    RollNo,
    Branch,
    Email,
    AddDescription,
    MobileNo,
  } = formData;

  return (
    <div className="addform">
      <div className="container">
        <h1 className="heading">Register Idea</h1>
        <div className="main-container">
          <form>
            <div className="field">
              <label htmlFor="hname">Hackathon Name:</label>
              <input
                type="text"
                name="hname"
                className="input"
                value={HackathonName}
                onChange={setForm}
              />
            </div>
            <div className="field">
              <label htmlFor="tname">Team Name:</label>
              <input
                type="text"
                name="tname"
                className="input"
                value={TeamName}
                onChange={setForm}
              />
            </div>
            <div className="field">
              <label htmlFor="tleader">Team Leader:</label>
              <input
                type="text"
                name="tleader"
                className="input"
                value={TeamLeader}
                onChange={setForm}
              />
            </div>
            <div className="field">
              <label htmlFor="libid">Roll No:</label>
              <input
                type="text"
                name="libid"
                className="input"
                onChange={setForm}
                value={RollNo}
              />
            </div>
            <div className="field">
              <label htmlFor="branch">Branch:</label>
              <input
                type="text"
                name="branch"
                className="input"
                value={Branch}
                onChange={setForm}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email id:</label>
              <input
                type="email"
                name="email"
                className="input"
                value={Email}
                onChange={setForm}
              />
            </div>
            <div className="field">
              <label htmlFor="desc">Add Description:</label>
              <input
                type="text"
                name="desc"
                className="input"
                value={AddDescription}
                onChange={setForm}
              />
            </div>
            <div className="field mob">
              <label htmlFor="mob">Mobile No.:</label>
              <input
                type="number"
                name="mob"
                className="input"
                value={MobileNo}
                onChange={setForm}
              />
            </div>
            <button className="verify">
              Verify Mobile <img src={check} alt="" />
            </button>
          </form>
          <button className="nextpage" onClick={() => navigation.next()}>
            Team Details <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addform;
