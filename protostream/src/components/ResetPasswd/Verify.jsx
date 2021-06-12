import React, { useState } from "react";
import Verifyimg from "../assets/reset.svg";
import arrow from "../assets/arrow.svg";
import "./css/Verify.css";

const Verify = () => {
  const [inputFields, setInputField] = useState({ email: "", Mobile: "" });
  const [error, setError] = useState({ emailError: false, MobileError: false });
  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(inputFields);
  };
  return (
    <div className="reset_password">
      <div className="container">
        <div className="img_container">
          <img className="verify_img" src={Verifyimg} alt="" />
        </div>

        <div className="main_container">
          <h1 className="head">
            {" "}
            Verify Email & <br /> Mobile
          </h1>
          <div className="form_container">
            <form onSubmit={onHandleSubmit}>
              <h3 className="form_head">KIET Email-ID</h3>

              <input
                name="email"
                type="email"
                value={inputFields.email}
                onChange={(e) => {
                  setInputField({ ...inputFields, email: e.target.value });
                }}
                required
              />
              <br />
              <span className="error">
                {error.emailError ? "Please provide a valid email" : ""}
              </span>

              <br />

              <h3 className="form_head">Mobile Number</h3>

              <input
                name="mobile"
                type="number"
                value={inputFields.Mobile}
                onChange={(e) => {
                  setInputField({ ...inputFields, Mobile: e.target.value });
                }}
                required
              />
              <br />
              <span className="error">
                {error.MobileError ? "Please provide a valid Mobile No." : ""}
              </span>
            </form>
            <p className="para">
              We will send you an OTP on this mobile number.
            </p>{" "}
            <button
              className="btn"
              onClick={onHandleSubmit}
              onSubmit={onHandleSubmit}
            >
              {" "}
              <img className="arrow" src={arrow} alt="" /> Get OTP
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
