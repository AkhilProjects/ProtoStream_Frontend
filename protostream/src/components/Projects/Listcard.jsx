import React from "react";
import "../../css/Projects/listcard.css";

function Listcard({ project_name, description, branch, members }) {
  return (
    <div className="listcard">
      <h1 className="project-name">{project_name}</h1>
      <p className="desc">{description}</p>
      <p className="branch">{branch}</p>
      <p className="members">{members} members</p>
      <button>{">"}</button>
    </div>
  );
}

export default Listcard;
