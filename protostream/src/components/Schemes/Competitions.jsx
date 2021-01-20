import React from 'react'

function Competitions() {
    return (
      <div className="schemes-comp">
        <h1 className="heading">
          Schemes,Hackathons and Programming Challenges
        </h1>
        <ul className="menu">
          <li className="item">Live</li>
          <li className="item">Upcoming</li>
          <li className="item">Previous</li>
        </ul>
        <div className="container">
          <Card />
        </div>
      </div>
    );
}

export default Competitions
