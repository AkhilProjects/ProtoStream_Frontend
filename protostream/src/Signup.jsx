import React, { useState } from "react";
// import "./css/auth.css";
// import background from "./components/background.jpg";
import LoginForm from "./components/Signup/LoginForm";
import SignupForm from "./components/Signup/SignupForm";


const Signup = () => {
  const [addclass, setAddClass] = useState("container");

  return (
    // <div classNameNameName="Login-page">
    //   <h1 classNameNameName="logo-sign">ProtoStream</h1>
    //   <img src={background} alt="" classNameNameName="image" />
    //   <LoginForm />
    //   {/* <img src={background} alt="" classNameName="image" /> */}
    //   <div classNameName="black"></div>
    // </div>
    <div className={addclass} id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-google"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fab fa-google"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              className="ghost"
              id="signIn"
              onClick={() => setAddClass("container")}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              className="ghost"
              id="signUp"
              onClick={() => setAddClass("container right-panel-active")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
