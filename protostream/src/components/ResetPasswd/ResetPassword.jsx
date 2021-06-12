import React, { useState } from "react";
import NewPassword from "../assets/NewPassword.svg";
import arrow from "../assets/arrow.svg";
import "./css/ResetPassword.css";
const ResetPassword = () => {
  const [resetPassword, setResetPassword] = useState({
    NewPassword: "",
    ConfirmPassword: "",
  });
  const [error, setError] = useState(false);
  const HandleSubmit = (e) => {
    if (
      !(resetPassword.NewPassword === resetPassword.ConfirmPassword) ||
      resetPassword.NewPassword.length < 8
    ) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    e.preventDefault();
    console.log(resetPassword);
  };
  return (
    <div className="reset_password">
      <div className="reset_container">
        <div className="img_container">
          <img className="newPass_img" src={NewPassword} alt="" />
        </div>

        <div className="main_container">
          <h1 className="head">Reset Password</h1>
          <div className="form_container">
            <form onSubmit={HandleSubmit}>
              <h3 className="form_head">New Password</h3>
              <input
                name="NewPassword"
                type="password"
                value={resetPassword.NewPassword}
                onChange={(e) => {
                  setResetPassword({
                    ...resetPassword,
                    NewPassword: e.target.value,
                  });
                }}
                required
              />

              <br />

              <h3 className="form_head">Confirm Password</h3>

              <input
                name="ConfirmPassword"
                type="password"
                value={resetPassword.ConfirmPassword}
                onChange={(e) => {
                  setResetPassword({
                    ...resetPassword,
                    ConfirmPassword: e.target.value,
                  });
                }}
                required
              />
              <br />
              <span className="error">
                {resetPassword.NewPassword.length < 8 &&
                resetPassword.NewPassword.length !== 0
                  ? "The password is too short!"
                  : ""}
              </span>
              <span className="error">
                {error ? "The passwords did not Match!" : ""}
              </span>
            </form>
          </div>
          <div className="btn_div">
            <button className="btn" onClick={HandleSubmit}>
              <img className="arrow" src={arrow} alt="" />
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
