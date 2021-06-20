import React, { useEffect, useState } from "react";
import { isAuthenticated, startupFormSubmit } from "../../../auth";
import "../css/RegisterForm.css";

const RegistrationForm = (props) => {
  const [values, setValues] = useState({
    StartupName: "",
    StartupDomain: "",
    StartupStage: "",
    StartupType: "",
    FounderName: "",
    FounderEmail: "",
    AadharNumber: "",
    ProjectSummary: "",
    Link: "",
    StartupBreif: "",
    presentation: "",
    // CofounderName: "",
    // CofounderEmail: "",
    // CofounderNumber: "",
    formData: "",
  });

  const preload = () => {
    setValues({ ...values, formData: new FormData() });
  };
  useEffect(() => {
    preload();
  }, []);

  const { formData } = values;
  const handleChange = (name) => (event) => {
    let value;
    if (name === "presentation") value = event.target.files[0];
    else value = event.target.value;

    formData.set(name, value);

    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = () => {
    const userId = isAuthenticated().user._id;
    const { ndaId } = props.location.state;
    startupFormSubmit(formData, userId, ndaId)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <div className="RegistrationForm">
      <div className="heading">Startup Details</div>
      <div className="container">
        <form className="form">
          <div className="field-container">
            <label htmlFor="">*Startup Name:</label>
            <input
              onChange={handleChange("StartupName")}
              name="StartupName"
              type="text"
              required
            />
          </div>
          <div className="field-container">
            <label htmlFor="">*Startup Domain:</label>
            <input
              name="StartupDomain"
              onChange={handleChange("StartupDomain")}
              type="text"
              required
            />
          </div>
          <div className="field-container">
            <p>*Startup Stage:</p>
            <form className="radio">
              <div className="field">
                <input
                  name="StartupStage"
                  onChange={handleChange("StartupStage")}
                  type="radio"
                  id="idea"
                  name="stage"
                  value="idea"
                />
                <label for="idea">Idea</label>
              </div>
              <div className="field">
                <input
                  name="StartupStage"
                  onChange={handleChange("StartupStage")}
                  type="radio"
                  id="prototype"
                  name="stage"
                  value="prototype"
                />
                <label for="prototype">Prototype</label>
              </div>
              <div className="field">
                <input
                  name="StartupStage"
                  onChange={handleChange("StartupStage")}
                  type="radio"
                  id="product"
                  name="stage"
                  value="product"
                />
                <label for="product">Product</label>
              </div>
            </form>
          </div>
          <div className="field-container">
            <p>*Startup Type:</p>
            <form className="radio">
              <div className="field">
                <input
                  name="StartupType"
                  onChange={handleChange("StartupType")}
                  type="radio"
                  id="service"
                  name="type"
                  value="service"
                />
                <label for="idea">Service Based</label>
              </div>
              <div className="field">
                <input
                  name="StartupType"
                  onChange={handleChange("StartupType")}
                  type="radio"
                  id="product"
                  name="type"
                  value="product"
                />
                <label for="product">Product Based:</label>
              </div>
              <div className="field">
                <input
                  name="StartupType"
                  onChange={handleChange("StartupType")}
                  type="radio"
                  id="other"
                  name="type"
                  value="other"
                />
                <label for="other">Other:</label>
              </div>
            </form>
          </div>
          <div className="field-container">
            <label htmlFor="">*Founder's Name:</label>
            <input
              name="FounderName"
              onChange={handleChange("FounderName")}
              type="text"
              required
            />
          </div>
          <div className="field-container">
            <label htmlFor="">*Founder's E-mail:</label>
            <input
              name="FounderEmail"
              onChange={handleChange("FounderEmail")}
              type="email"
              required
            />
          </div>
          <div className="field-container">
            <label htmlFor="">*AADHAR ID No:</label>
            <input
              name="AadharNumber"
              onChange={handleChange("AadharNumber")}
              type="number"
              max="12"
              min="12"
              required
            />
          </div>
          <div className="field-container">
            <label htmlFor="">*Startup Summary:</label>
            <textarea
              onChange={handleChange("ProjectSummary")}
              name="ProjectSummary"
              id=""
              cols="70"
              rows="10"
              required
            ></textarea>
          </div>
          <div className="field-container">
            <label htmlFor="">Project Site/Github:</label>
            <input name="Link" onChange={handleChange("Link")} type="url" />
          </div>
          <div className="field-container">
            <label htmlFor="">*Startup Breif:</label>
            <textarea
              onChange={handleChange("StartupBreif")}
              name="StartupBreif"
              id=""
              cols="50"
              rows="10"
              required
            ></textarea>
          </div>
          <div className="field-container">
            <label htmlFor="">*Presentation File:</label>
            <input
              name="presentation"
              onChange={handleChange("presentation")}
              type="file"
            />
          </div>
          <input
            name=""
            onClick={onSubmitHandler}
            // onChange={handleChange()}
            type="submit"
            value="submit"
            className="submit-btn"
          />
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
