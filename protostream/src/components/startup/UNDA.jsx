import React from 'react'
import './css/dnda.css'
import upload from '../../assets/images/upload.svg'
import arrow from "../../assets/images/arrow.svg";
import { NavLink } from "react-router-dom";

function UNDA() {
    return (
      <div className="dnNDA">
        <h1 className="main-head">Upload NDA</h1>
        <div className="container">
          <form className="form">
            <input type="radio" name="radio" id="radio" required />
            <label htmlFor="radio">
              I hereby Declare that the details provided by me are valid and the
              Idea submitted is solely mine and does not infringe anyone’s
              copyrights,patents or pitch and I accept the guidelines and
              framework provided by ProtoStream and TBI KIET.{" "}
            </label>
            <div className="other-detail">
              <h4 className="subhead">Non Disclosure Agreement</h4>
              <div className="agreement">
                <p className="name">NDA.pdf</p>
                <input type="file" name="" id="" />
              </div>

              <div className="startup-name">
                <p className="name">Startup Name</p>
                <input type="text" name="" id="" required/>
              </div>
            </div>
            <NavLink to="/user/dashboard">
              <button type="submit" className="next">
                Submit and go to Dashboard<img src={arrow} alt="" />
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    );
}

export default UNDA
