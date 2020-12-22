import React from "react";
import "./css/Signup.css";
import background from "./components/background.jpg";
import LoginForm from "./components/Signup/LoginForm";
import SignupForm from "./components/Signup/SignupForm";

const Signup = () => {
  return (
    <div className="Login-page">
      <h1 className="logo-sign">ProtoStream</h1>
      <img src={background} alt="" className="image" />
      <LoginForm />
      <img src={background} alt="" className="image" />
    </div>
  );
};

export default Signup;
