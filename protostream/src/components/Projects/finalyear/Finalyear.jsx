import React from "react";
import "../../../css/Projects/finalyear/final.css";
import Card from "./Card";

function Finalyear() {
  return (
    <div className="finalyear">
      <div className="container">
        <h1 className="heading">Final Year Projects</h1>
        <div className="main-container">
          <Card
            name="CSE"
            src="http://www.africau.edu/images/default/sample.pdf"
          />
          <Card
            name="IT"
            src="http://www.africau.edu/images/default/sample.pdf"
          />
          <Card
            name="ME"
            src="http://www.africau.edu/images/default/sample.pdf"
          />
          <Card
            name="EE"
            src="http://www.africau.edu/images/default/sample.pdf"
          />
          <Card
            name="CIVIL"
            src="http://www.africau.edu/images/default/sample.pdf"
          />
          <Card
            name="ECE"
            src="http://www.africau.edu/images/default/sample.pdf"
          />
          <Card
            name="EN"
            src="http://www.africau.edu/images/default/sample.pdf"
          />
          <Card
            name="PHARMA"
            src="http://www.africau.edu/images/default/sample.pdf"
          />
        </div>
      </div>
    </div>
  );
}

export default Finalyear;
