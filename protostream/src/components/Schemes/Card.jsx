import React from 'react'
import '../../css/Schemes/card.css'

function Card({name, src, regdate, startdate}) {
    return (
      <div className="schemes-card">
        <div className="overlay">{name}</div>
        <div className="logo">
            <img src={src} alt=""/>
        </div>
        <div className="details">
          <div className="comp">
            <p className="name">Register Before: </p>
            <span className="ans">{regdate}</span>
          </div>
          <div className="comp">
            <p className="name">Starts on: </p>
            <span className="ans">{startdate}</span>
          </div>
          <div className="buttons">
            <button className="btn a">Details</button>
            <button className="btn b">Register</button>
          </div>
        </div>
      </div>
    );
}

export default Card
