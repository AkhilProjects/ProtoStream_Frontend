import React, {useState} from 'react'
import link from '../../assets/images/link.svg'
import '../../css/Internship/internshipCard.css'

function Card({ name, position_title, positions, reward, summary }) {
    const [active, setActive] = useState(false);
  return (
    <div className={active ? "card-internship activated" : "card-internship"}>
      <header><button className="close" onClick={()=>setActive(false)}>+</button>{name}</header>
      <ul className="details">
        <li className="item">
          Position Title: <span>{position_title}</span>
        </li>
        <li className="item">
          Available Positions: <span>{positions}</span>
        </li>
        <li className="item">
          Reward: <span>{reward}</span>
        </li>
      </ul>
      <div className="summary">{summary}</div>
      <div className="buttons">
        <button className="arrow" onClick={()=>setActive(true)}>></button>
        <button className="register">Register <img src={link} alt=""/></button>
      </div>
    </div>
  );
}

export default Card
