import React from "react";
import "../../../css/DashBoard/box.css";

function Box({ heading, para }) {
  const onClickProject = () =>{
    
 
  }
  return (
    <div className="box-container" onClick={onClickProject}>
      <div className="box">
        <h2>{heading}</h2>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default Box;
