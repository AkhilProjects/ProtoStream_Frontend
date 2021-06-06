import React from 'react'
import './css/Card.css'

function Card({icon, head, text}) {
    return (
      <div className="dashboard-card">
        <div className="items">
          <img src={icon} alt="" />
          <div className="sub-head">{head}</div>
          <div className="text">{text}</div>
        </div>
      </div>
    );
}

export default Card
