import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../../css/Schemes/Competitions.css";
import codechef from "../../assets/images/Codecheflogo.svg";
import { isAuthenticated, schemeFetch } from "../../auth";

function Competitions() {
  const [schemes, setSchemes] = useState([]);

  const preload = () => {
    const user = isAuthenticated();
    console.log(user);
    schemeFetch(user.token).then((data) => {
      console.log(data);
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
        <a href="/schemes/NidhiEir" className="schemes-link" target="blank">
          <div className="new-scheme">
            <img
              src="http://www.tbi-kiet.in/assets/images/nidhi-banner.jpg"
              alt=""
              className="scheme-poster"
            />
            <p className="para">NIDHI-EIR</p>
          </div>
        </a>
        <a href="/schemes/NidhiPrayas" className="schemes-link" target="blank">
          <div className="new-scheme">
            <img
              src="http://www.tbi-kiet.in/assets/images/prayas-banner.jpg"
              alt=""
              className="scheme-poster"
            />
            <p className="para">NIDHI-PRAYAS</p>
          </div>
        </a>
        <a href="/schemes/it_policy" className="schemes-link" target="blank">
          <div className="new-scheme">
            <img
              src="http://www.tbi-kiet.in/assets/images/image.jpg"
              alt=""
              className="scheme-poster"
            />
            <p className="para">IT & Security Policy</p>
          </div>
        </a>
        <a
          href="http://www.tbi-kiet.in/uploads/tide2.pdf"
          className="schemes-link"
          target="blank"
        >
          <div className="new-scheme">
            <img
              src="http://www.tbi-kiet.in/assets/images/MeitYtbi2.jpg"
              alt=""
              className="scheme-poster"
            />
            <p className="para">MEITY STARTUP</p>
          </div>
        </a>

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
