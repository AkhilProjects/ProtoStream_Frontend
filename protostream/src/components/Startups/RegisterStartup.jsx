import React, { useState } from "react";
import mobile from "../../assets/images/Mobile.svg";
import "../../css/Startups/registerStartup.css";
import { NavLink, Redirect, useHistory, withRouter } from "react-router-dom";
import { isAuthenticated, optVerify } from "../../auth";

function RegisterStartup() {
  const history = useHistory();

  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState();
  const [code, setCode] = useState();
  const [didRedirect, setDidRedirect] = useState(false);

  const { user } = isAuthenticated();
  console.log(user);
  const nextcontainer = () => {
    setNext(true);
  };

  const prevcontainer = () => {
    setNext(false);
  };

  const handleChange = (name) => (event) => {
    // console.log("inside handlechange");
    console.log(event.target.value);
    setCode({ [name]: event.target.value });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const userId = isAuthenticated().user._id;
    // console.log("inside obsubmithandler");
    optVerify(userId, code)
      .then((response) => {
        setDidRedirect(true);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  const performRedirect = () => {
    const { user } = isAuthenticated();
    if (didRedirect) {
      console.log(user);

      history.push("/startups/download-NDA");
      window.location.reload();
    }
  };

  const registerStartupForm = () => (
    <div className="register-startup">
      <div className={!next ? "container-1" : "hidden"}>
        <h1 className="heading">Step 1</h1>
        <h2 className="sub-head">Verify Mobile</h2>
        <form>
          <p className="info">Enter the OTP sent to {user.number}</p>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            onChange={handleChange("code")}
            type="number"
            name="code"
            className="input-field"
          />
          <button onClick={onSubmitHandler} className="verify">
            Verify
          </button>
        </form>
        <NavLink to="/startups/download-NDA">
          <button className="next-btn">Next Step</button>
        </NavLink>
      </div>

      {/* <div className={next ? "container-2" : "hidden"}>
      <h2 className="sub-head">Startup Details</h2>
      <form>
        <label htmlFor="name">Startup Name:</label>
        <input type="text" name="name" className="input-field" />
        <label htmlFor="domain">Startup Domain:</label>
        <input type="text" name="domain" className="input-field" />

        <form>
          <label className="label">I have an: </label>
          <label htmlFor="idea">
            Idea
            <input type="radio" name="idea" value="idea" />
            <span className="radio"></span>
          </label>
          <label htmlFor="prototype">
            Prototype
            <input type="radio" name="prototype" value="prototype" />
            <span className="radio"></span>
          </label>
          <label htmlFor="product">
            Product
            <input type="radio" name="product" value="product" />
            <span className="radio"></span>
          </label>
        </form>

        <form>
          <label className="label">My startup is: </label>
          <label htmlFor="idea">Service based</label>
          <input type="radio" name="idea" id="radio1" value="idea" />
          <label htmlFor="prototype">Product based</label>
          <input
            type="radio"
            name="prototype"
            id="radio2"
            value="prototype"
          />
          <label htmlFor="product">else</label>
          <input type="radio" name="product" id="radio3" value="product" />
        </form>

        <button type="submit" className="verify">
          Submit
        </button>
      </form>

      <button className="next-btn" onClick={prevcontainer}>
        Previous
      </button>
    </div> */}
    </div>
  );

  return (
    <div>
      {registerStartupForm()}
      {performRedirect()}
    </div>
  );
}

export default withRouter(RegisterStartup);
