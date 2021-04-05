import React from "react";
import "./css/form.css";
import arrow from "../../assets/images/arrow.svg";
import { NavLink } from "react-router-dom";

function FormB() {
  return (
    <div className="form-page">
      <h1 className="main-head">List Internships</h1>
      <div className="container">
        <form className="form">
          <div className="field">
            <label htmlFor="title">Internship Title *</label>
            <input type="text" id="title" required placeholder="*(Required)" />
          </div>
          <div className="field">
            <label htmlFor="pos">Available Positions *</label>
            <input type="number" id="pos" required placeholder="*(Required)" />
          </div>
          <div className="field">
            <label htmlFor="reward">Rewards/Cash *</label>
            <input type="text" id="reward" required placeholder="*(Required)" />
          </div>
          <div className="field">
            <label htmlFor="pbreif">Position Breif *</label>
            <textarea
              id="pbreif"
              cols="35"
              rows="5"
              required
              placeholder="*(Required)"
            ></textarea>
          </div>
          <div className="field">
            <label htmlFor="gform">Google form Link *</label>
            <input type="link" id="gform" required placeholder="*(Required)" />
          </div>

          <div className="field">
            <label htmlFor="title">Internship Title</label>
            <input type="text" id="title" />
          </div>
          <div className="field">
            <label htmlFor="pos">Available Positions</label>
            <input type="number" id="pos" />
          </div>
          <div className="field">
            <label htmlFor="reward">Rewards/Cash</label>
            <input type="text" id="reward" />
          </div>
          <div className="field">
            <label htmlFor="pbreif">Position Breif</label>
            <textarea id="pbreif" cols="35" rows="5"></textarea>
          </div>
          <div className="field">
            <label htmlFor="gform">Google form Link</label>
            <input type="link" id="gform" />
          </div>

          <div className="field">
            <label htmlFor="title">Internship Title</label>
            <input type="text" id="title" />
          </div>
          <div className="field">
            <label htmlFor="pos">Available Positions</label>
            <input type="number" id="pos" />
          </div>
          <div className="field">
            <label htmlFor="reward">Rewards/Cash</label>
            <input type="text" id="reward" />
          </div>
          <div className="field">
            <label htmlFor="pbreif">Position Breif</label>
            <textarea id="pbreif" cols="35" rows="5"></textarea>
          </div>
          <div className="field">
            <label htmlFor="gform">Google form Link</label>
            <input type="link" id="gform" />
          </div>
        </form>
        <NavLink to="/registered-startup">
          <button className="next">
            Next Step <img src={arrow} alt="" />
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default FormB;
