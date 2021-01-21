import React from 'react'
import Card from "./Card";
import '../../css/Schemes/Competitions.css'

function Competitions() {
    return (
      <div className="schemes-comp">
        <h1 className="heading">
          Schemes, Hackathons and Programming Challenges
        </h1>
        <ul className="menu">
          <li className="item">Live</li>
          <li className="item">Upcoming</li>
          <li className="item">Previous</li>
        </ul>
        <div className="container">
          <Card
            name="codechef"
            regdate="15 Jan 2021"
            startdate="20 Jan 2021"
            src="#"
          />
          <Card
            name="codechef"
            regdate="15 Jan 2021"
            startdate="20 Jan 2021"
            src="#"
          />
          <Card
            name="codechef"
            regdate="15 Jan 2021"
            startdate="20 Jan 2021"
            src="#"
          />
          <Card
            name="codechef"
            regdate="15 Jan 2021"
            startdate="20 Jan 2021"
            src="#"
          />
          <Card
            name="codechef"
            regdate="15 Jan 2021"
            startdate="20 Jan 2021"
            src="#"
          />
          <Card
            name="codechef"
            regdate="15 Jan 2021"
            startdate="20 Jan 2021"
            src="#"
          />
          <Card
            name="codechef"
            regdate="15 Jan 2021"
            startdate="20 Jan 2021"
            src="#"
          />
        </div>
      </div>
    );
}

export default Competitions
