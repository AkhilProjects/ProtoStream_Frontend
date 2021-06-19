import React, { useState } from "react";
import Overlay1 from "../../assets/images/Overlay1.svg";
import Overlay2 from "../../assets/images/Overlay2.svg";
import { authenticate, isAuthenticated, signup } from "../../auth";
import "../../css/Auth/Sign.css";
import { Redirect } from "react-router-dom";
function Signup2() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    number: "",
    loading: false,
    didRedirect: false,
  });
  const { email, password, number, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    console.log("inside handlechange", values);
    setValues({ ...values, error: false, [name]: event.target.value });
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

  const onSubmitSignUp = (event) => {
    event.preventDefault();
    // setValues({ ...values, error: false, loading: true });
    console.log(values);
    signup({ email, password, number }).then((data) => {
      if (data.error) {
        // Redirect..
      }
      authenticate(data, () => {
        setValues({
          ...values,
          didRedirect: true,
        });
        performRedirect();
      });
    });
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
        <div className="heading">Sign Up</div>
        <div className="sub-head">
          Sign up and start your Entrepreneurial Journey
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
            onChange={handleChange("number")}
            name="number"
            type="number"
            max="10"
            min="10"
            placeholder="Mob No."
            className="inp-box"
          />
          <input
            onChange={handleChange("password")}
            name="password"
            type="password"
            placeholder="Password"
            className="inp-box"
          />
          <input
            onChange={handleChange("confirmPassword")}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="inp-box"
          />

          <p className="para">
            Already have an Account? <a href="/signin">Sign in</a>
          </p>
          <button onClick={onSubmitSignUp} className="sign-btn">
            Signup
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signup2;
