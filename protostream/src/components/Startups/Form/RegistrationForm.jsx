import React from 'react'
import "../css/RegisterForm.css";

function RegistrationForm() {
    return (
      <div className="RegistrationForm">
        <div className="heading">Startup Details</div>
        <div className="container">
          <form className="form">
            <div className="field-container">
              <label htmlFor="">*Startup Name:</label>
              <input type="text" required />
            </div>
            <div className="field-container">
              <label htmlFor="">*Startup Domain:</label>
              <input type="text" required />
            </div>
            <div className="field-container">
              <p>*Startup Stage:</p>
              <form className="radio">
                <div className="field">
                  <input type="radio" id="idea" name="stage" value="idea" />
                  <label for="idea">Idea</label>
                </div>
                <div className="field">
                  <input
                    type="radio"
                    id="prototype"
                    name="stage"
                    value="prototype"
                  />
                  <label for="prototype">Prototype</label>
                </div>
                <div className="field">
                  <input
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
                    type="radio"
                    id="service"
                    name="type"
                    value="service"
                  />
                  <label for="idea">Service Based</label>
                </div>
                <div className="field">
                  <input
                    type="radio"
                    id="product"
                    name="type"
                    value="product"
                  />
                  <label for="product">Product Based:</label>
                </div>
                <div className="field">
                  <input type="radio" id="other" name="type" value="other" />
                  <label for="other">Other:</label>
                </div>
              </form>
            </div>
            <div className="field-container">
              <label htmlFor="">*Founder's Name:</label>
              <input type="text" required />
            </div>
            <div className="field-container">
              <label htmlFor="">*Founder's E-mail:</label>
              <input type="email" required />
            </div>
            <div className="field-container">
              <label htmlFor="">*AADHAR ID No:</label>
              <input type="number" max="12" min="12" required />
            </div>
            <div className="field-container">
              <label htmlFor="">*Startup Summary:</label>
              <textarea name="" id="" cols="70" rows="10" required></textarea>
            </div>
            <div className="field-container">
              <label htmlFor="">Project Site/Github:</label>
              <input type="url" />
            </div>
            <div className="field-container">
              <label htmlFor="">*Startup Breif:</label>
              <textarea name="" id="" cols="50" rows="50" required></textarea>
            </div>
            <div className="field-container">
              <label htmlFor="">*Presentation File:</label>
              <input type="file" />
            </div>
            <input type="submit" value="submit" className="submit-btn" />
          </form>
        </div>
      </div>
    );
}

export default RegistrationForm
