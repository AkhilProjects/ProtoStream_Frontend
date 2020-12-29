import React from "react";
import Card from "./Card";
import "../../css/Homepage/team.css";
import boy from "../../assets/images/boy.jpg";
import boy2 from "../../assets/images/boy2.jpg";
import girl from "../../assets/images/girl.jpg";
import { NavLink } from "react-router-dom";

const Team = () => {
  return (
    <div className="team">
      <h1 className="heading">Seek New Opportunities</h1>
      <p className="sub-head">Be Whatever you desire to be.</p>
      <div className="cards">
        <Card job="Programmer" image={boy} key="1" />
        <Card job="UX Designer" image={girl} key="2" />
        <Card job="Content Writer" image={boy2} key="3" />
      </div>
      <NavLink to="/internships" className="buttons">
        <button className="internships">Internships</button>
      </NavLink>
    </div>
  );
};

export default Team;
