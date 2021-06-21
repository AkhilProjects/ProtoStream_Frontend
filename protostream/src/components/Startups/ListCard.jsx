import React from "react";

function ListCard({ name, desc, branch, founder }) {
  console.log("inside ListCard");
  return (
    <div className="listcard">
      <h1 className="project-name">{name}</h1>
      <p className="desc">{desc}</p>
      <p className="branch">{branch}</p>
      <p className="branch">{founder}</p>
      <button>{">"}</button>
    </div>
  );
}

export default ListCard;
