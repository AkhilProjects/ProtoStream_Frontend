import React from 'react'

function Row(props) {
    return (
      <div className="row">
        <div className="column serial">
          <p className="para">{props.sr}</p>
        </div>
        <div className="column name">
          <div className="candidate-details">
            <img
              src={props.image}
              alt=""
              className="img"
            />
            <a href="">
              <p className="para">{props.candidateName}</p>
            </a>
            <p className="para">{props.number}</p>
            <p className="para">{props.email}</p>
          </div>
        </div>
        <div className="column enterprise">
          <a href="#">
            <p className="para">{props.enterprise}</p>
          </a>
        </div>
        <div className="column project-name ">
          <div>
            <p className="para">
              {props.project_name}
            </p>
            <br />
            <p className="para">Patent File Number: N/A </p>
          </div>
        </div>
        <div className="column fellowship">
          <p className="para ">{props.fellowship}</p>
        </div>
      </div>
    );
}

export default Row
