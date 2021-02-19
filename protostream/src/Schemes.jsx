import React from "react";
import schemes from './assets/images/Schemes.svg'
import plus from "./assets/images/plus.svg";
import arrow from "./assets/images/arrow.svg";
import './css/Schemes/home.css'
import {NavLink} from 'react-router-dom'

const Schemes = () => {
  return (
    <div className="schemes">
      <div className="left">
        <h1 className="head">Schemes</h1>
        <p className="para">
          List of all the government Schemes for Entrepreneurship and
          Incubations , also a curated list of Inter/Intra College Competitions
          , Online Hackathons and Coding Competitions .
        </p>
        <NavLink to="/schemes/addscheme" className='add'>
          <button>
            Add Schemes <img src={plus} alt="" />
          </button>
        </NavLink>
      </div>
      <div className="right">
        <img src={schemes} alt="" className="illustration" />
        <NavLink to="/schemes/competitions" className="button">
          <button>
            List of Schemes
            <img src={arrow} alt="" />
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Schemes;
