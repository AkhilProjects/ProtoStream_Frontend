import "../../../css/Projects/Form/form.css";

import React from 'react'
import {NavLink} from "react-router-dom";

function Submit() {
  return (
    <div className="submit-container">
      <div className="submit">
        <h1>Your Hackathon is Successfully Registered.</h1>
        <NavLink to="/projects/hackathons" className='btn'>
          <button>Go to Hackathons</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Submit
