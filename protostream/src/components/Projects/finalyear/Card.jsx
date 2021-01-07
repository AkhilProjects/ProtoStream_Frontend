import React from "react";
import "../../../css/Projects/finalyear/card.css";

function Card({ name }) {
  return (
    <div className="branch-card">
      <div className="box">
        <h1 className="head">{name}</h1>
      </div>
    </div>
  );
}

export default Card;
