import React, { useContext, useState, useEffect } from "react";
import Listcard from "./Listcard";
import "../../css/Projects/projectHackathon.css";
import { allHackathons } from "../../auth/index";

function ProjectHackathon() {
  const [hackathons, setHackathons] = useState([]);

  const getResponse = async () => {
    const response = await allHackathons();
    console.log("response", response);
    response.map((items) => {
      console.log("Year", items.createdAt.split("-")[0]);
    });
    console.log(response)
    setHackathons(response);
  };
  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div className="projectHackathon">
      <div className="container">
        <h1 className="heading">Hackathons Projects</h1>
        <div className="main-container">
          {/* <Modal /> */}
          <div className="navigation">
            <ul className="years">
              <li>
                <button>2021</button>
              </li>
            </ul>

            <input type="text" className="search" placeholder="search..." />
          </div>
          <div className="list-container">
            {hackathons.map((hackathon) => (
              <Listcard
                project_name={hackathon.TeamName}
                description={hackathon.AddDescription}
                members="5"
                key={hackathon._id}
                id={hackathon._id}
                branch={hackathon.Branch}
                date={hackathon.createdAt}
                Member1name={hackathon.MemberName}
                Member1roll={hackathon.MemberRollNo}
                Member1branch={hackathon.MemberBranch}
                Member2name={hackathon.MemberName1}
                Member2roll={hackathon.MemberRollNo1}
                Member2branch={hackathon.MemberBranch1}
                Member3name={hackathon.MemberName2}
                Member3roll={hackathon.MemberRollNo2}
                Member3branch={hackathon.MemberBranch2}
                lmail={hackathon.Email}
                lname={hackathon.TeamLeader}
                lrno={hackathon.RollNo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectHackathon;
