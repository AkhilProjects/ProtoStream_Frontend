import React from 'react'
import "./css/form.css";
import arrow from "../../assets/images/arrow.svg";
import { NavLink } from "react-router-dom";

function FormA() {
    return (
      <div className="form-page">
        <h1 className="main-head">Startup Details</h1>
        <div className="container">
          <form className="form">
            <div className="field">
              <label htmlFor="startup-name">Startup Name</label>
              <input type="text" id="startup-name" />
            </div>
            <div className="field">
              <label htmlFor="startup-domain">Startup Domian</label>
              <input type="text" id="startup-domain" />
            </div>
            <div className="field">
              <label htmlFor="founder-name">Founder Name</label>
              <input type="text" id="founder-name" />
            </div>
            <div className="field">
              <label htmlFor="founder-name">Founder E-mail</label>
              <input type="email" id="founder-email" />
            </div>
            <div className="field">
              <label htmlFor="aadhar">AADHAR No.</label>
              <input type="number" id="aadhar" />
            </div>
            <div className="field">
              <label htmlFor="breif">Startup Breif</label>
              <textarea
                id="breif"
                cols="35"
                rows="5"
                minLength="300"
                placeholder="300-500 words"
              ></textarea>
            </div>
            <div className="field">
              <label htmlFor="cname">Co-Founder Name</label>
              <input type="text" id="cname" />
            </div>
            <div className="field">
              <label htmlFor="cemail">Co-founder E-mail</label>
              <input type="email" id="cemail" />
            </div>
            <div className="field">
              <label htmlFor="cmob">Co-founder Mobile</label>
              <input type="number" minLength="10" maxLength="10" id="cmob" />
            </div>
          </form>
          <NavLink to="/download-NDA">
            <button className="next">
              Next Step <img src={arrow} alt="" />
            </button>
          </NavLink>
        </div>
      </div>
    );
}

export default FormA
