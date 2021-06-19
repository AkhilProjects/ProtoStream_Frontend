import React from 'react'
import './css/Step.css'
import {NavLink} from 'react-router-dom'

function Step({head, subHead, link, icon, isdisabled}) {
    return (
      <NavLink to={`/startups/${link}`} className={isdisabled ?"disabled" :"step-link"}>
        
        {isdisabled ? (
          <div className="center">
            <h1 className="heading">This Step is Completed</h1>
          </div>
        ) : (
          <div className="step">
            <h1 className="heading">{head}</h1>
            <p className="sub-head">{subHead}</p>
            <img src={icon} alt="" className="icon" />
          </div>
        )}
      </NavLink>
    );
}

export default Step
