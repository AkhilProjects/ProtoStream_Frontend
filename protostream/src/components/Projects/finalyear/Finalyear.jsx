import React from "react";
import "../../../css/Projects/finalyear/final.css";
import Card from "./Card";

function Finalyear() {
  return (
    <div className="finalyear">
      <div className="container">
        <h1 className="heading">Final Year Projects</h1>
        <div className="main-container">
          <Card name="CSE" />
          <Card name="IT" />
          <Card name="ME" />
          <Card name="EE" />
          <Card name="CIVIL" />
          <Card name="ECE" />
          <Card name="EN" />
          <Card name="PHARMA" />
        </div>
      </div>
    </div>
  );
}

export default Finalyear;
