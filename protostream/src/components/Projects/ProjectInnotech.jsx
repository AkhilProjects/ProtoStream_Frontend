import React, {useContext, useState, useEffect} from "react";
import Listcard from "./Listcard";
import "../../css/Projects/projectHackathon.css";
import { allHackathons } from "../../auth/index";

function ProjectInnotech() {
  const [hackathons, setHackathons] = useState([]);
      

  const getResponse = async () => {
    const response = await allHackathons()
    console.log("response",response);
    response.map(items => {
      console.log("Year", items.createdAt.split('-')[0]);
    })
    setHackathons(response);
  };

  // const count_years = () => {
  //   var count = [];
  //   var year = 0;
  //   AllHackathons.map(item => {
  //     year = item.createdAt.split("-")[0];
  //     console.log("count Year", item.createdAt.split("-")[0]);
  //     for(let i = 0; i < count.length; i++){
  //       if(count[i] != year)
  //         count.push(year);
  //     }
  //   });

  //   console.log("count",count, year);
  // }
  
  useEffect(() => {
    getResponse();
    
  }, [])

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
                    key = {hackathon._id}
                    id = {hackathon._id}
                    branch={hackathon.leaderBranch}
                    date = {hackathon.createdAt}
                    lmobile={hackathon.leaderMobile}
                    lmail={hackathon.leaderMailId}
                    lname={hackathon.leaderName}
                    lrno={'1900290100073'}
                  />
                
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProjectInnotech;
