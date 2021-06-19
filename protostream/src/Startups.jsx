import React from 'react'
import StartupCard from './components/Startups/StartupCard'
import './css/Startups/startups.css';
import {NavLink} from 'react-router-dom'
import {isAuthenticated} from './auth/index.js'

function Startups() {
  const onClickHandler = () => {
    const user = isAuthenticated();
    console.log(user.user._id);

  }
    return (
      <div className="startup-app">
        <NavLink to="/startups/allstartups" className="link" onClick={onClickHandler} >
          <StartupCard
            heading="Startup"
            para="Start your journey and build something valueable that brings changes and drives the world to a better future."
            subhead=" “Innovation distinguishes between a leader and a follower.” "
            btntext="Register Startup"
            link="Steps"
          />
        </NavLink>
        <NavLink to="/trl" className="link">
          <StartupCard
            heading="Evaluate"
            para="Evaluate your startup potential and check the viability of you product by using the TRL Test created by NASA to assess the potential and state of a startup idea or prototype "
            subhead="“Innovation distinguishes between a leader and a follower.” "
            btntext="Take TRL Test"
            link=" "
          />
        </NavLink>
      </div>
    );
}

export default Startups
