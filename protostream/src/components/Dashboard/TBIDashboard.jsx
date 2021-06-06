import React from 'react'
import Sidebar from './components/Sidebar'
import Main from "./components/Main";

function TBIDashboard() {
    return (
      <div className="dashboard">
        <div className="Container">
          <Sidebar></Sidebar>

          <Main></Main>
        </div>
      </div>
    );
}

export default TBIDashboard
