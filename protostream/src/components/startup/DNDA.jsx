import React from 'react'
import "./css/dnda.css"

function DNDA() {
    return (
      <div className="dnNDA">
          <h1 className="main-head">Download NDA</h1>
        <div className="container">
          <form className="form">
            <input type="radio" name="radio" id="radio" />
            <label htmlFor="radio">
              I hereby Declare that the details provided by me are valid and the
              Idea submitted is solely mine and does not infringe anyone’s
              copyrights,patents or pitch and I accept the guidelines and
              framework provided by ProtoStream and TBI KIET.{" "}
            </label>
          </form>
          <div className="other-detail">
            <h4 className="subhead">Non Disclosure Agreement</h4>
            <div className="agreement">
              <p className="name">NDA.pdf</p>
              <button className="download">Download</button>
            </div>
            <p className="action">
              *Download the file , Fill in all the details and get the idea
              signed by your Dept HOD and Mentor and then upload the Pdf in the
              next step to get your startup published on Protostream
            </p>
          </div>
          <button className="next">Upload NDA</button>
        </div>
      </div>
    );
}

export default DNDA
