// import React from "react";
import "../../../css/Projects/Form/form.css";
import plus from "../../../assets/images/plus.svg";
import arrow from "../../../assets/images/arrow.svg";

// function Member2({ formData, setForm, navigation }) {
//   const { MemberName1, MemberRollNo1, MemberBranch1, MemberEmail1 } = formData;

//   return (
//     <div className="addform">
//       <div className="container">
//         <h1 className="heading">Add Member</h1>
//         <div className="main-container">
//           <form>
//             <div className="field">
//               <label htmlFor="mname">Member Name:</label>
//               <input
//                 type="text"
//                 name="mname"
//                 className="input"
//                 value={MemberName1}
//                 onChange={setForm}
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="rno">Roll No:</label>
//               <input
//                 type="number"
//                 name="rno"
//                 className="input"
//                 value={MemberRollNo1}
//                 onChange={setForm}
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="branch">Branch:</label>
//               <input
//                 type="text"
//                 name="branch"
//                 className="input"
//                 value={MemberBranch1}
//                 onChange={setForm}
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="text"
//                 name="email"
//                 className="input"
//                 onChange={setForm}
//                 value={MemberEmail1}
//               />
//             </div>

//             <button className="verify" onClick={() => navigation.next()}>
//               Add Member <img src={plus} alt="" />
//             </button>
//             <button className="nextpage">
//               Submit <img src={arrow} alt="" />
//             </button>
//           </form>

//           <button
//             className="nextpage prev"
//             onClick={() => navigation.previous()}
//           >
//             <img src={arrow} alt="" /> Previous
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Member2;



import React, { Component } from "react";

export default class Member2 extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, inputChange } = this.props;
    return (
      <div className="addform">
        <div className="container">
          <h1 className="heading">Add Member</h1>
          <div className="main-container">
            <form>
              <div className="field">
                <label htmlFor="MemberName1">Member Name:</label>
                <input
                  type="text"
                  className="input"
                  name="MemberName1"
                  onChange={inputChange("MemberName1")}
                  value={values.MemberName1}
                />
              </div>
              <div className="field">
                <label htmlFor="MemberRollNo1">Roll No:</label>
                <input
                  type="number"
                  className="input"
                  name="MemberRollNo1"
                  onChange={inputChange("MemberRollNo1")}
                  value={values.MemberRollNo1}
                />
              </div>
              <div className="field">
                <label htmlFor="MemberBranch1">Branch:</label>
                <input
                  type="text"
                  className="input"
                  name="MemberBranch1"
                  onChange={inputChange("MemberBranch1")}
                  value={values.MemberBranch1}
                />
              </div>
              <div className="field">
                <label htmlFor="MemberEmail1">Email:</label>
                <input
                  type="text"
                  className="input"
                  name="MemberEmail1"
                  onChange={inputChange("MemberEmail1")}
                  value={values.MemberEmail1}
                />
              </div>
            </form>
            {/* <button className="nextpage">
              Submit
            </button> */}
            <button className="verify" onClick={this.continue}>
              Add Member
              <img src={plus} alt="" />
            </button>
            <button className="nextpage prev" onClick={this.back}>
              Back
              {/* <img src={arrow} alt="" /> */}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
