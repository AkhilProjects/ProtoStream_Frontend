import React from "react";
import "../../css/Projects/Form/form.css";
import check from "../../assets/images/check.svg";

function SchemeForm() {
  return (
    <div className="addform">
      <div className="container">
        <h1 className="heading">Create new Schemes/Competition</h1>
        <div className="main-container">
          <form>
            <div className="field">
              <label htmlFor="ctitle">Competition title:</label>
              <input type="text" name="ctitle" className="input" />
            </div>
            <div className="field">
              <label htmlFor="org">Organizer:</label>
              <input type="text" name="org" className="input" />
            </div>
            <div className="field">
              <label htmlFor="regdead">Registration Deadline:</label>
              <input type="date" name="regdead" className="input" />
            </div>
            <div className="field">
              <label htmlFor="strdate">Starting date:</label>
              <input type="date" name="strdate" className="input" />
            </div>
            <div className="field">
              <label htmlFor="enddate">End Date:</label>
              <input type="date" name="enddate" className="input" />
            </div>
            <div className="field">
              <label htmlFor="regpagelink">Registration Page Link:</label>
              <input type="text" name="regpagelink" className="input" />
            </div>
            <div className="field">
              <label htmlFor="himg">Attach Header Image:</label>
              <input type="file" name="himg" className="file" />
            </div>
            <div className="field">
              <label htmlFor="dfile">Attach Details file:</label>
              <input type="file" name="dfile" className="file" />
            </div>
            <button className="nextpage">
              Create Competition
              <img src={check} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SchemeForm;
