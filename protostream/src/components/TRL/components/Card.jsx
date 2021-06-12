import React from 'react'
import "../css/TRLCard.css"

function Card({text, heading, change, value}) {
    return (
      <div className="Trl-Card" onClick={() => change(value)}>
        <h1 className="heading">{heading}</h1>
        <p className="text">{text}</p>
      </div>
    );
}

export default Card 
