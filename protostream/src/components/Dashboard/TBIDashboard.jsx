import React, {useState, useEffect} from 'react'
import Sidebar from './components/Sidebar'
import Badge from "../../assets/images/startup-badge.svg";
import trophy from "../../assets/images/trophy.svg";
import profile from "../../assets/images/profile.svg";
import Project from "../../assets/images/Project.svg";
import arrow from "../../assets/images/arrow.svg";
import find from "../../assets/images/find.svg";
import search from "../../assets/images/search.svg";
import file from "../../assets/images/file.svg";
import cloudupload from "../../assets/images/cloudupload.svg";
import edit from "../../assets/images/edit.svg";
import remove from "../../assets/images/Remove.svg";
import Main from "./components/Main";
import { isAuthenticated, signout } from "../../auth";
import {  useHistory } from "react-router-dom";
import Card from "./components/Card";
import plus from "../../assets/images/plus.svg";
import cloud from "../../assets/images/upload.svg";
import checklist from "../../assets/images/checklist.svg";

function TBIDashboard() {
   const { user } = isAuthenticated();
   const { Profilename, ProfileBranch, ProfileYear } = user.profiledata;

    let history = useHistory();
    const onClickLogout = () => {
      signout(() => {
        history.push("/login");
      });
    };

    const Hackathons = () => {
      return (
        <div className="cards">
          <Card
            icon={plus}
            head="Add Hackathon"
            text="create a new category for 
            Hackathon for the current year"
          />
          <Card
            icon={trophy}
            head="Choose Winner"
            text="Choose a Winner for Hackathon
            or Assign Positions to Winning Project"
          />
          <Card
            icon={Project}
            head="Add/Remove Project"
            text="LAdd or Remove any project that violates the 
            rules or is disqualified ."
          />
          <Card
            icon={remove}
            head="Edit/Remove Hackathon"
            text="create a new category for 
            Hackathon for the current year"
          />
        </div>
      );
    }
    const Schemes = () => {
      return (
        <div className="cards">
          <Card
            icon={plus}
            head="Add Scheme"
            text="Create a New Scheme or  Competition"
          />
          <Card
            icon={remove}
            head="Remove/Archive Scheme"
            text="create a new category for 
            Hackathon for the current year"
          />
          <Card
            icon={Project}
            head="Edit /Update Scheme"
            text="Increase /Decrease Deadlines.Add Files
            or Google Forms to Fill"
          />
        </div>
      );
    }
    const FinalYear = () => {
      return (
        <div className="cards">
          <Card
            icon={plus}
            head="Add Branch/Stream"
            text="add a new  Branch , Stream or Section for more 
            detailed retreival of Projects and Files"
          />
          <Card
            icon={edit}
            head="Edit/Modify File"
            text="Edit or Modify any Branch Project List"
          />
          <Card
            icon={cloudupload}
            head="Upload File"
            text="Add or Remove any project that violates the 
            rules or is disqualified ."
          />
        </div>
      );
    }
    const Startups = () => {
      return (
        <>
          <div className="preview">
            <div className="name">
              <img src={file} alt="" />
              <p>List Startups</p>
            </div>
            <button>
              <img src={arrow} alt="" />
            </button>
          </div>
          <div className="cards">
            <Card
              icon={search}
              head="Search"
              text="Search for a specific Startup or Team Member"
            />
            <Card
              icon={edit}
              head="Edit/Update NDA"
              text="Add or Remove any project that violates the 
              rules or is disqualified ."
            />
            <Card
              icon={remove}
              head="Edit/Remove Internship"
              text="Remove completed/incorrect Internships"
            />
            <Card
              icon={edit}
              head="List Non-Approved Startups"
              text="Check /Approve any Non-Approved Startup"
            />
            <Card
              icon={find}
              head="Internship List"
              text="Check for the Listed Internships for any error/violation"
            />
          </div>
        </>
      );
    }

    const [value, setValue] = useState(1)

    const DashboardMain = () =>{
      switch(value){
        case 1:
          return Hackathons();
          break;
        case 2:
          return Schemes();
          break;
        case 3:
          return FinalYear();
          break;
        case 4:
          return Startups();
          break;

      }
    }

    useEffect(()=>{
      DashboardMain();
    }, [value])

    return (
      <div className="dashboard">
        <div className="Container">
          <Sidebar>
            <img src={profile} alt="" />
            <h4 className="name">TBI KIET</h4>
            <div className="buttons">
              <button className={value == 1 ? "sections active" : "sections"} onClick={()=>setValue(1)}>Hackathons</button>
              <button className={value == 2 ? "sections active" : "sections"} onClick={()=>setValue(2)}>Schemes</button>
              <button className={value == 3 ? "sections active" : "sections"} onClick={()=>setValue(3)}>Final Year Project</button>
              <button className={value == 4 ? "sections active" : "sections"} onClick={()=>setValue(4)}>Startups</button>
            </div>
            <button className="log-out" onClick={onClickLogout}>
              <i className="fas fa-sign-out-alt"></i> Log Out
            </button>
          </Sidebar>

          <Main>
            <div className="dashboard-name">
              <img src={Badge} alt="" />
              <p className="name">Admin Panel</p>
            </div>
            <div className="yellow-container">
              {DashboardMain()}
            </div>
          </Main>
        </div>
      </div>
    );
}

export default TBIDashboard
