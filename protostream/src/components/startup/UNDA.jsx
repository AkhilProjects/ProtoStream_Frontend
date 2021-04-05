import React from 'react'
import './css/unda.css'
import upload from '../../assets/images/upload.svg'
import arrow from "../../assets/images/arrow.svg";
import { NavLink } from "react-router-dom";

function UNDA() {
    return (
      <div className="UNDA">
        <h1 className="main-head">Upload NDA</h1>
        <div className="container">
          <form className="form">
            <h3 className="heading">Non Disclosure Agreement</h3>
            <div className="upload">
              <p className="name">Signed NDA</p>
              <label htmlFor="upload" className="file-input">
                <img src={upload} alt=""/>
              </label>
              <input type="file" id="upload" />
            </div>
            <div className="field">
              <label htmlFor="">Project Site/Github: </label>
              <input
                type="text"
                required
                placeholder="Link to site or Github"
              />
            </div>
            <div className="field">
              <label htmlFor="">Startup Summary: </label>
              <textarea
                name=""
                required
                placeholder="300-800 words"
                id=""
                cols="35"
                rows="5"
                maxLength="800"
                minLength="300"
              ></textarea>
            </div>
            <div className="field">
              <label htmlFor="">Presentation file: </label>
              <input type="file" required placeholder="*.ppt/*.pptx" />
            </div>
          </form>
          <NavLink to="/list-internships">
            <button className="next">List Internships <img src={arrow} alt=""/></button>
          </NavLink>
        </div>
      </div>
    );
}

export default UNDA
