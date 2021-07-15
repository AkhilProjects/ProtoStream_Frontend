import React, { useState, useEffect } from "react";
import ListCard from "./ListCard";
import "./css/AllStartups.css";
import { fetchStartups, isAuthenticated } from "../../auth";

function AllStartups() {
  const [values, setValues] = useState([]);

  const laodStartups = () => {
    const UserId = isAuthenticated().user._id;
    fetchStartups(UserId).then((response) => {
      console.log(response);
      setValues(response);
    });
  };

  useEffect(() => {
    laodStartups();
  }, []);

  return (
    <div className="all-Startups">
      <div className="heading">Startups</div>
      <div className="container">
        <div className="navigation">
          <input type="text" className="search" placeholder="search..." />
        </div>
        <div className="list-container">
          {values.map((startup) => {
            return (
              <ListCard
                key={startup._id}
                name={startup.StartupName}
                desc={startup.ProjectSummary}
                branch="CSE"
                founder={startup.FounderName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllStartups;
