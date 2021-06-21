import React, { useState } from "react";
import Overlay1 from "../../assets/images/Overlay1.svg";
import Overlay2 from "../../assets/images/Overlay2.svg";
import { authenticate, isAuthenticated, signup } from "../../auth";
import "../../css/Auth/Sign.css";
import { Redirect, useHistory, withRouter } from "react-router-dom";
function Signup2() {
  const history = useHistory();

  const [values, setValues] = useState({
    email: "akhil.1923cs1028@kiet.edu",
    password: "12345",
    confirmPassword: "12345",
    error: "",
    number: "1234567",
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
    if (didRedirect) {
      if (user && user.role === 0) {
        history.push("/user/dasboard");
        window.location.reload();
      }
    }
  };

  const onSubmitSignUp = (event) => {
    event.preventDefault();
    // setValues({ ...values, error: false, loading: true });
    signup({ email, password, number }).then((data) => {
      if (data.error) {
        // Redirect..
      }
      authenticate(data, () => {
        setValues({
          ...values,
          didRedirect: true,
        });
      });
    });
  };

  const signupForm = () => (
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

  return (
    <div>
      {performRedirect()}
      {signupForm()}
    </div>
  );
}

export default Signup2;
