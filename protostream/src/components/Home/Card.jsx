import React from "react";
import "../../css/Homepage/card.css";

const Card = ({ image, job }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <h1 className="Job-name">{job}</h1>
    </div>
  );
};

export default Card;
