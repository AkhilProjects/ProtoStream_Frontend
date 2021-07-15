import React, { useEffect, useState } from "react";
import "../../css/DashBoard/dashboard.css";
import profile from "../../assets/images/profile.svg";
import ListCard from "../Startups/ListCard";
import Box from "./components/Box";
import { allHackathons, isAuthenticated, signout } from "../../auth";
import { NavLink, useHistory } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const Dashboard = () => {
  const [load, setLoad] = useState();
  const [hackathons, setHackathons] = useState([]);

  const preload = () => {
    if (load === true) setLoad(false);
    allHackathons()
      .then((response) => {
        setHackathons(response);
        console.log(response);
      })
      .catch();
    // console.log(allHackathons());
  };

  useEffect(() => {
    preload();
  }, []);

  const { user } = isAuthenticated();
  const { Profilename, ProfileBranch, ProfileYear } = user.profiledata;

  let history = useHistory();
  const onClickLogout = () => {
    signout(() => {
      history.push("/");
      window.location.reload();
    });
  };
  const onClickMyProjects = () => {};

  const dashboardForm = () => {
    // window.location.reload();
    return (
      <div className="dashboard">
        <div className="Container">
          <Sidebar>
            <img className="student-img" src={profile} alt="student-imh" />
            <h4 className="name">{Profilename}</h4>
            <p className="student"> {ProfileBranch}</p>
            <p className="student">{ProfileYear}</p>

            <button className="log-out" onClick={onClickLogout}>
              <i className="fas fa-sign-out-alt"></i> Log Out
            </button>
          </Sidebar>

          <Main>
            <div className="btns">
              <NavLink to="/resources" className="navlink">
                <Box
                  heading="Learn Entrepreneurship"
                  para="Check the resources here"
                />
              </NavLink>
              <NavLink to="/Startups/Registration_steps" className="navlink">
                <Box
                  heading="Register a Startup"
                  para="Register for a startup"
                />
              </NavLink>
            </div>
            <div className="yellow-container">
              <div className="heading">My Projects</div>
              <div className="sub-head">
                List of your enrolled projects/startups
              </div>
              <div className="projects-container">
                {hackathons.map((hackathon) => (
                  <ListCard
                    name={hackathon.TeamName}
                    desc={hackathon.AddDescription}
                    branch={hackathon.Branch}
                    founder={hackathon.TeamLeader}
                  />
                ))}
              </div>
            </div>
          </Main>
        </div>
      </div>
    );
  };

  return <div>{dashboardForm()}</div>;
};

export default Dashboard;
