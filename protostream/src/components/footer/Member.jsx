import React from 'react'
import '../../css/footer/Member.css'
import PP from "../../assets/images/pp.svg"

function Member({name, session, work}) {
    return (
      <div className="member">
        <img className="PP" src={PP} alt="" />
        <div className="content">
          <h4 className="name">{name}</h4>
          <p className="session">{session}</p>
          <p className="work"> {work}</p>
        </div>
      </div>
    );
}

export default Member
