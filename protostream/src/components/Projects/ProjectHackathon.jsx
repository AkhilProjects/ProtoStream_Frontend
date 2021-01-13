import React, {useContext, useState, useEffect} from "react";
import Listcard from "./Listcard";
// import Modal from "./Modal";
import "../../css/Projects/projectHackathon.css";
// import { HackathonContext } from "./fetchdata";
import { allHackathons } from "../../auth/index";

function ProjectHackathon() {
  const [hackathons, setHackathons] = useState([]);
      var AllHackathons = [];

  const getResponse = async () => {
    const response = await allHackathons()
    console.log("response",response);
    setHackathons(response);
  };

  useEffect(() => {
    getResponse();
  }, [])
  return (
    <hackathonProvider>
      <div className="projectHackathon">
        <div className="container">
          <h1 className="heading">Hackathons Projects</h1>
          <div className="main-container">
            {/* <Modal /> */}
            <div className="navigation">
              <ul className="years">
                <li>
                  <button>2018</button>
                </li>
                <li>
                  <button>2019</button>
                </li>
                <li>
                  <button>2020</button>
                </li>
              </ul>

              <input type="text" className="search" placeholder="search..." />
            </div>
            <div className="list-container">
              {/* <Listcard
                project_name="Roxet"
                description="Creating Reusable Rockets for space exploration and transportation of supplies and sending satellites to the orbit."
                branch="ME"
                members="4"
              />
              <Listcard
                project_name="Sploosh"
                description="New Technique for Rain water harvesting and Saline Water Use as Coolant in Nuclear Power Plants"
                branch="CE"
                members="3"
              />
              <Listcard
                project_name="BookStrom"
                description="A new platform for sharing and selling books  and writing their brief summaries and general discussions."
                branch="CS"
                members="4"
              /> */}
              
              {hackathons.map((hackathon) => (
                
                  // console.log("hackathon", hackathon._id);
                  <Listcard
                    project_name={hackathon.teamName}
                    description={hackathon.projectSummary}
                    // branch={}
                    members="5"
                    branch={hackathon.leaderBranch}
                  />
                
              ))}
            </div>
          </div>
        </div>
      </div>
    </hackathonProvider>
  );
}

export default ProjectHackathon;
