import React from 'react'
import '../../../css/Projects/Form/cardteam.css'
function CardTeam({name, rno, branch, email}) {
    return (
      <div className="cardteam">
        <div className="field">
          <p className="head">Name: </p>
          <p className="sub">{name}</p>
        </div>
        <div className="field">
          <p className="head">Roll No: </p>
          <p className="sub">{rno}</p>
        </div>
        <div className="field">
          <p className="head">Branch: </p>
          <p className="sub">{branch}</p>
        </div>
        <div className="field">
          <p className="head">E-mail: </p>
          <p className="sub">{email}</p>
        </div>
      </div>
    );
}

export default CardTeam
