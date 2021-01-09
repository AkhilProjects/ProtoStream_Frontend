import React from "react";
import "../css/footer.css";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="box">
          <div className="head">ProtoStream</div>
          <p className="para">
            We focus on reducing the threshold it takes to create the startups
            and provide mentorship to all students to boost the ecosystem for
            innovation and building the future
          </p>
          <ul className="icons">
            <li>
              <a href="#">
                <img src={instagram} alt="" className="icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={facebook} alt="" className="icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={youtube} alt="" className="icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="" className="icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="box">
          <div className="head">Contact</div>

          <p>KIET Group of Institutions </p>
          <p>Delhi-NCR, Meerut Road (NH-58) </p>
          <p>Ghaziabad-201206 </p>
          <br />
          <p> Tel-01232-227980</p>
          <p> Toll Free No:1800 3130 056</p>
        </div>
        <div className="box">
          <div className="head">Site link</div>
          <ul className="site-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Terms & Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;