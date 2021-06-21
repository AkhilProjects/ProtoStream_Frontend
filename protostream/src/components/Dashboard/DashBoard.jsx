import React from "react";
import "../../css/DashBoard/dashboard.css";
import profile from "../../assets/images/profile.svg";
import ListCard from "../Startups/ListCard";
import Box from "./components/Box";
import { isAuthenticated, signout } from "../../auth";
import { NavLink, useHistory } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const Dashboard = () => {
  window.location.reload();

  const { user } = isAuthenticated();
  const { Profilename, ProfileBranch, ProfileYear } = user.profiledata;

  let history = useHistory();
  const onClickLogout = () => {
    signout(() => {
      history.push("/login");
    });
  };
  const onClickMyProjects = () => {};

  const dashboardForm = () => {
    return (
      <div className="dashboard">
        <div className="Container">
          <Sidebar></Sidebar>

          <Main></Main>
        </div>
      </div>
    );
  };

  return <div>{dashboardForm()}</div>;
};

export default Dashboard;
