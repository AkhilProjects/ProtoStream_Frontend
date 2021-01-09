import React, { useState } from "react";
import "../../css/Projects/card.css";
import plus from "../../assets/images/plus.svg";
import arrow from "../../assets/images/arrow.svg";
import { NavLink} from 'react-router-dom';

function Card({ heading, para, button_1, button_2 }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={hover ? "card hovering" : "card"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="details-sec">
        <h1 className="main-head">{heading}</h1>
        <p className="para">{para} </p>
      </div>
      <div className="btns">
        <NavLink to="/projects/addform" className="add">
          <button className={hover ? "add-project" : "disable"}>
            {button_1} <img src={plus} alt="" />
          </button>
        </NavLink>
        <button className={hover ? "card-name" : "disable"}>
          {button_2} <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
