import React, { useState } from 'react'
import mobile from '../../assets/images/Mobile.svg';
import '../../css/Startups/registerStartup.css';

function RegisterStartup() {
    const [next, setNext] = useState(false);
    const [prev, setPrev] = useState();

    const nextcontainer = () => {
        setNext(true);
    }

    const prevcontainer = () => {
        setNext(false);
    }

    return (
      <div className="register-startup">
        <div className={!next ? "container-1" : "hidden"}>
          <h1 className="heading">Step 1</h1>
          <h2 className="sub-head">Verify Mobile</h2>
          <form>
            <label htmlFor="mob">Mobile Number:</label>
            <input type="number" name="mob" className="input-field" />
            <label htmlFor="btn">Request OTP</label>
            <button name="btn" className="button-otp">
              <img src={mobile} alt="mob" />
            </button>
            <label htmlFor="otp">Enter OTP:</label>
            <input type="number" name="otp" className="input-field" />
            <button type="submit" className="verify">
              Verify
            </button>
          </form>
          <button className="next-btn" onClick={nextcontainer}>
            Next Step
          </button>
        </div>

        <div className={next ? "container-2" : "hidden"}>
          <h1 className="heading">Step 2</h1>
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
        </div>
      </div>
    );
}

export default RegisterStartup
