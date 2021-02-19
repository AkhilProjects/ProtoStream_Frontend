import React, {useState} from "react";
import "../../../css/Projects/finalyear/card.css";
import download from "../../../assets/images/download.svg";


function Card({ name, src }) {
  const [active, setActive] = useState(false);
  const showModal = () => {
    setActive(true);
  };
  const hideModal = () => {
    setActive(false);
  };

  return (
    <div className="branch-card" >
      <div className="box" onClick={showModal}>
        <h1 className="head">{name}</h1>
      </div>
      <div className={active ? "pdf-container" : "closed"}>
        <button className="close" onClick={hideModal}>+</button>
        <h1 className="heading">{name}</h1>
        <div className="header">
          <ul className="years">
            <li>2021</li>
          </ul>
          <button className="download"><img src={download} alt=""/></button>
        </div>
        <div className="container">
          <iframe src={src} frameborder="0"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Card;
