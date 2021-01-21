import React from "react";
import "../../../css/Projects/finalyear/final.css";
import Card from "./Card";

function Finalyear() {
  return (
    <div className="finalyear">
      <div className="container">
        <h1 className="heading">Final Year Projects</h1>
        <div className="main-container">
          <Card name="CSE" src="#" />
          <Card name="IT" src="#" />
          <Card name="ME" src="#" />
          <Card name="EE" src="#" />
          <Card name="CIVIL" src="#" />
          <Card name="ECE" src="#" />
          <Card name="EN" src="#" />
          <Card name="PHARMA" src="#" />
        </div>
      </div>
    </div>
  );
}

export default Finalyear;
