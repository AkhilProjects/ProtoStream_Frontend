// import React from "react";
import "../../../css/Projects/Form/form.css";
import plus from "../../../assets/images/plus.svg";
import arrow from "../../../assets/images/arrow.svg";

// function Member3({ formData, setForm, navigation }) {
//   const { MemberName2, MemberRollNo2, MemberBranch2, MemberEmail2 } = formData;

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
//                 value={MemberName2}
//                 onChange={setForm}
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="rno">Roll No:</label>
//               <input
//                 type="number"
//                 name="rno"
//                 className="input"
//                 value={MemberRollNo2}
//                 onChange={setForm}
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="branch">Branch:</label>
//               <input
//                 type="text"
//                 name="branch"
//                 className="input"
//                 value={MemberBranch2}
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
//                 value={MemberEmail2}
//               />
//             </div>

//             {/* <button className="verify" onClick={() => navigation.next()}>
//               Add Member <img src={plus} alt="" />
//             </button> */}
            
//           </form>
//           <button className="nextpage" onClick={() => navigation.next()}>
//             Submit <img src={arrow} alt="" />
//           </button>
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

// export default Member3;


import React, { Component } from "react";

export default class Member3 extends Component {
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
                <label htmlFor="MemberName2">Member Name:</label>
                <input
                  type="text"
                  className="input"
                  name="MemberName2"
                  onChange={inputChange("MemberName2")}
                  value={values.MemberName2}
                />
              </div>
              <div className="field">
                <label htmlFor="MemberRollNo2">Roll No:</label>
                <input
                  type="number"
                  className="input"
                  name="MemberRollNo2"
                  onChange={inputChange("MemberRollNo2")}
                  value={values.MemberRollNo2}
                />
              </div>
              <div className="field">
                <label htmlFor="MemberBranch2">Branch:</label>
                <input
                  type="text"
                  className="input"
                  name="MemberBranch2"
                  onChange={inputChange("MemberBranch2")}
                  value={values.MemberBranch2}
                />
              </div>
              <div className="field">
                <label htmlFor="MemberEmail2">Email:</label>
                <input
                  type="text"
                  className="input"
                  name="MemberEmail2"
                  onChange={inputChange("MemberEmail2")}
                  value={values.MemberEmail2}
                />
              </div>
              <button className="verify" onClick={this.continue}>
                Add Member
                <img src={plus} alt="" />
              </button>
            </form>
            {/* <button className="nextpage">
              Submit
            </button> */}
            {/* <button className="verify" onClick={this.continue}>
              Add Member
              <img src={plus} alt="" />
            </button> */}
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
