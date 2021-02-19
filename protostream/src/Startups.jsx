import React from 'react'
import StartupCard from './components/Startups/StartupCard'
import './css/Startups/startups.css';
import {NavLink} from 'react-router-dom'

function Startups() {
    return (
      <div className="startup-app">
        <NavLink to="/startups/register" className="link">
          <StartupCard
            heading="Startup"
            para="Start your journey and build something valueable that brings changes and drives the world to a better future."
            subhead=" “Innovation distinguishes between a leader and a follower.” "
            btntext="Register Startup"
          />
        </NavLink>
        <NavLink to="" className="link">
          <StartupCard
            heading="Evaluate"
            para="Evaluate your startup potential and check the viability of you product by using the TRL Test created by NASA to assess the potential and state of a startup idea or prototype "
            subhead="“Innovation distinguishes between a leader and a follower.” "
            btntext="Take TRL Test"
          />
        </NavLink>
      </div>
    );
}

export default Startups
