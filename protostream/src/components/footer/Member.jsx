import React from 'react'
import '../../css/footer/Member.css'

function Member({name, session, work, image}) {
    return (
      <div className="member">
        <img className="PP" src={image} alt="" />
        <div className="content-item">
          <h4 className="name">{name}</h4>
          <p className="session">{session}</p>
          <p className="work"> {work}</p>
        </div>
      </div>
    );
}

export default Member
