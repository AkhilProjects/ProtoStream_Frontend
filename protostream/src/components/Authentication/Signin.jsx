import React, { useState } from "react";
import Overlay1 from "../../assets/images/Overlay1.svg";
import Overlay2 from "../../assets/images/Overlay2.svg";
import { authenticate, isAuthenticated, signin } from "../../auth";
import "../../css/Auth/Sign.css";
import { Redirect } from "react-router-dom";

function Signin() {
  const [values, setValues] = useState({
    email: "test.1923cs1029@kiet.edu",
    password: "12345",
    error: "",
    loading: false,
    didRedirect: false,
  });
  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    console.log("inside handlechange");
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmitSignIn = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            didRedirect: true,
          });
          performRedirect();
        });
      }
    });
  };

  const performRedirect = () => {
    console.log("inside performRedirect");
    if (didRedirect) {
      console.log("inside did redirect");
      console.log(user);
      if (user && user.role === 0) {
        console.log("inside redirect    ");
        return <Redirect to="/dashboard" />;
      }
    }
  };

  return (
    <section className="auth">
      <div className="overlay1">
        <img src={Overlay1} alt="" />
      </div>
      <div className="overlay2">
        <img src={Overlay2} alt="" />
      </div>
      <div className="container">
        <div className="heading">Sign in</div>
        <div className="sub-head">
          Sign in and continue your Entrepreneurial Journey
        </div>
        <form action="" className="form">
          <input
            onChange={handleChange("email")}
            name="email"
            type="email"
            placeholder="E-mail"
            className="inp-box"
          />
          <input
            onChange={handleChange("passwordiiii")}
            name="password"
            type="password"
            placeholder="Password"
            className="inp-box"
          />
          <div className="remember">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember me</label>
          </div>
          <p className="para">
            <a href="#">Forgot Password.</a> New here?{" "}
            <a href="/signup">Sign up</a>
          </p>
          <button onClick={onSubmitSignIn} className="sign-btn">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signin;
