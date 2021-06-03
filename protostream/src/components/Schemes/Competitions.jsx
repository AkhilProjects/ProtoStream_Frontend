import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../../css/Schemes/Competitions.css";
import codechef from "../../assets/images/Codecheflogo.svg";
import { schemeFetch } from "../../auth";

function Competitions() {
  const [schemes, setSchemes] = useState([]);

  const preload = () => {
    schemeFetch().then((data) => {
      if (data.error) {
        //redirect to error page...
      } else {
        setSchemes(data);
      }
    });
    console.log(schemes);
  };
  useEffect(() => {
    preload();
  }, []);
  console.log(schemes);

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
        {schemes.map((scheme, index) => {
          return (
            <Card
              key={index}
              name={scheme.compTitle}
              regdate={scheme.deadline}
              startdate={scheme.starting}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Competitions;
