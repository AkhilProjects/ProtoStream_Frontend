import React from "react";
import Card from "./components/Projects/Card";
import "./css/Projects/project.css";
import { NavLink } from "react-router-dom";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-container">
        <NavLink to="/projects/hackathons" className="card-link">
          <Card
            heading="Hackathons"
            para="list of projects registered for hackathon competitions and intracollege competitions or  virtual hackathons hosted by companies and organisations."
            button_1="Add Projects"
            button_2="Hackathons"
          />
        </NavLink>
        <NavLink to="/projects/innotech" className="card-link">
          <Card
            heading="Innotech/B-Plan"
            para="list of projects registered for Intra college competition in branches and annual Technical fest and Entreprenurship Fest."
            button_1="Add Internships"
            button_2="Internships"
          />
        </NavLink>
        <NavLink to="/projects/finalyear" className="card-link">
          <Card
            heading="Final Year Projects"
            para="list of projects submitted by  final year students with their particular branches and domains."
            button_1="Add Project"
            button_2="Projects"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Projects;
