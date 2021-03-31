import React from 'react'

function UNDA() {
    return (
      <div className="UNDA">
        <h1 className="main-head">Upload NDA</h1>
        <div className="container">
          <form className="form">
            <h3 className="heading">Non Disclosure Agreement</h3>
            <div className="upload">
              <p className="name">Signed NDA</p>
              <button className="upload-btn"></button>
            </div>
            <div className="field">
              <label htmlFor="">Project Site/Github: </label>
              <input
                type="text"
                required
                placeholder="Link to site or Github"
              />
            </div>
            <div className="field">
              <label htmlFor="">Startup Summary: </label>
              <textarea
                name=""
                required
                placeholder="500-800 words"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="field">
              <label htmlFor="">Presentation file: </label>
              <input
                type="file"
                required
                placeholder="*.ppt/*.pptx"
              />
            </div>
          </form>
          <button className="next">List Internships</button>
        </div>
      </div>
    );
}

export default UNDA
