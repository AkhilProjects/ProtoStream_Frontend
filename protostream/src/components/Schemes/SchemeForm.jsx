import React, { useState } from "react";

import "../../css/Projects/Form/form.css";
import check from "../../assets/images/check.svg";
import { isAuthenticated, schemeSubmit } from "../../auth";

const  SchemeForm=()=> {
  const [values, setValues] = useState({
    ctitle: "",
    org: "",
    regdead: "",
    strdate: "",
    enddate: "",
    regpagelink: "",
    himg: "",
    dfile: "",
    error: false,
    loading: false,
  });

  const scheme = values;

  const user = isAuthenticated();
  console.log("[schemeForm user]", user.user);

  const handleChange = (name) => (event) => {
    console.log("inside handlechange");
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    schemeSubmit({ scheme, user }).then().catch();
  };

  const schemeFormMain = () =>{
    return (
      <div className="addform">
      <div className="container">
        <h1 className="heading">Create new Schemes/Competition</h1>
        <div className="main-container">
          <form>
            <div className="field">
              <label htmlFor="ctitle">Competition title:</label>
              <input
                type="text"
                name="ctitle"
                className="input"
                onChange={handleChange("ctitle")}
              />
            </div>
            <div className="field">
              <label htmlFor="org">Organizer:</label>
              <input
                type="text"
                name="org"
                className="input"
                onChange={handleChange("org")}
              />
            </div>
            <div className="field">
              <label htmlFor="regdead">Registration Deadline:</label>
              <input
                type="date"
                name="regdead"
                className="input"
                onChange={handleChange("regdead")}
              />
            </div>
            <div className="field">
              <label htmlFor="strdate">Starting date:</label>
              <input
                type="date"
                name="strdate"
                className="input"
                onChange={handleChange("strdate")}
              />
            </div>
            <div className="field">
              <label htmlFor="enddate">End Date:</label>
              <input
                type="date"
                name="enddate"
                className="input"
                onChange={handleChange("enddate")}
              />
            </div>
            <div className="field">
              <label htmlFor="regpagelink">Registration Page Link:</label>
              <input
                type="text"
                name="regpagelink"
                className="input"
                onChange={handleChange("regpagelink")}
              />
            </div>
            <div className="field">
              <label htmlFor="himg">Attach Header Image:</label>
              <input
                type="file"
                name="himg"
                className="file"
                onChange={handleChange("himg")}
              />
            </div>
            <div className="field">
              <label htmlFor="dfile">Attach Details file:</label>
              <input
                type="file"
                name="dfile"
                className="file"
                onChange={handleChange("dfile")}
              />
            </div>
            <button className="nextpage" onClick={onSubmitHandler}>
              Create Competition
              <img src={check} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
    )
  }
  return (
    <div>
      {schemeFormMain()}
    </div>
  );
}

export default SchemeForm;



