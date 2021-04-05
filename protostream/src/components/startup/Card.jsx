import React, {useState} from 'react'
import './css/card.css'
import arrow from'../../assets/images/arrow.svg'

function Card({startup_name, title, pos, reward, details, }) {
  const [classname, setClassname] =  useState(true)
    const max = () => setClassname(false)
    const min = () => setClassname(true);

    return (
      <div className={classname ? "card" : "card maxed"}>
        <div className="head-section">
          <span className="close" onClick={min}>
            +
          </span>
          <h1 className="title">{startup_name}</h1>
        </div>
        <div className="details-sec">
          <p>
            Position Title: <span>{title}</span>
          </p>
          <p>
            Available Positions: <span>{pos}</span>
          </p>
          <p>
            Reward: <span>{reward}</span>
          </p>
          <p className="hide">{details}</p>
        </div>
        <div className="buttons-section">
          <button className="arrow-btn" onClick={max}>
            <img src={arrow} alt="" />
          </button>
          <button className="btn">Register</button>
        </div>
      </div>
    );
}

export default Card 
