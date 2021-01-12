import React from "react";
import "../../../css/Projects/Form/form.css";
import plus from "../../../assets/images/plus.svg";
import arrow from "../../../assets/images/arrow.svg";

function Member2({ formData, setForm, navigation }) {
  const { MemberName1, MemberRollNo1, MemberBranch1, MemberEmail1 } = formData;

  return (
    <div className="addform">
      <div className="container">
        <h1 className="heading">Add Member</h1>
        <div className="main-container">
          <form>
            <div className="field">
              <label htmlFor="mname">Member Name:</label>
              <input
                type="text"
                name="mname"
                className="input"
                value={MemberName1}
                onChange={setForm}
              />
            </div>
            <div className="field">
              <label htmlFor="rno">Roll No:</label>
              <input
                type="number"
                name="rno"
                className="input"
                value={MemberRollNo1}
                onChange={setForm}
              />
            </div>
            <div className="field">
              <label htmlFor="branch">Branch:</label>
              <input
                type="text"
                name="branch"
                className="input"
                value={MemberBranch1}
                onChange={setForm}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                className="input"
                onChange={setForm}
                value={MemberEmail1}
              />
            </div>

            <button className="verify" onClick={() => navigation.next()}>
              Add Member <img src={plus} alt="" />
            </button>
            <button className="nextpage">
              Submit <img src={arrow} alt="" />
            </button>
          </form>

          <button
            className="nextpage prev"
            onClick={() => navigation.previous()}
          >
            <img src={arrow} alt="" /> Previous
          </button>
        </div>
      </div>
    </div>
  );
}

export default Member2;
