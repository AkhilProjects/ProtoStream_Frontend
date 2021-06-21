import React, { useState, useEffect } from "react";
import ListCard from "./ListCard";
import "./css/AllStartups.css";
import { fetchStartups } from "../../auth";

function AllStartups() {
  const [values, setValues] = useState({ value: [] });

  const laodStartups = () => {
    fetchStartups().then((response) => {
      response.map((startup) => {
        console.log(startup);
        return (
          <ListCard
            key={startup._id}
            name={startup.StartupName}
            desc={startup.ProjectSummary}
            branch="CSE"
            founder={startup.FounderName}
          />
        );
      });
    });
  };

  return (
    <div className="all-Startups">
      <div className="heading">Startups</div>
      <div className="container">
        <div className="navigation">
          <input type="text" className="search" placeholder="search..." />
        </div>
        <div className="list-container">{laodStartups()}</div>
      </div>
    </div>
  );
}

export default AllStartups;
