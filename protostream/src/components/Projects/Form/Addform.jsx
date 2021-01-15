// import React from "react";
import "../../../css/Projects/Form/form.css";
import arrow from "../../../assets/images/arrow.svg";

// const Addform = ({ formData, setForm, navigation }) => {
//   const {
//     // HackathonName,
//     TeamName,
//     TeamLeader,
//     RollNo,
//     Branch,
//     Email,
//     AddDescription,
//     // MobileNo,
//   } = formData;

//   const handleChange = (e) => {
//     console.log(e.target.value);
//     setForm(prev => [...prev, e.target.value])
//   }
//   return (
//     <div className="addform">
//       <div className="container">
//         <h1 className="heading">Register Idea</h1>
//         <div className="main-container">
//           <form>
//             {/* <div className="field">
//               <label htmlFor="hname">Hackathon Name:</label>
//               <input
//                 type="text"
//                 name="hname"
//                 className="input"
//                 value={HackathonName}
//                 onChange={setForm}
//               />
//             </div> */}
//             <div className="field">
//               <label >Team Name:</label>
//               <input
//                 type="text"
//                 name="tname"
//                 className="input"
//                 value={TeamName}
//                 // defaultValue={TeamName}
//                 onChange={setForm}
//                 autoComplete="off"
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="tleader">Team Leader:</label>
//               <input
//                 type="text"
//                 name="tleader"
//                 className="input"
//                 value={TeamLeader}
//                 onChange={setForm}
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="libid">Roll No:</label>
//               <input
//                 type="text"
//                 name="libid"
//                 className="input"
//                 onChange={setForm}
//                 value={RollNo}
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="branch">Branch:</label>
//               <input
//                 type="text"
//                 name="branch"
//                 className="input"
//                 value={Branch}
//                 onChange={setForm}
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="email">Email id:</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="input"
//                 value={Email}
//                 onChange={setForm}
//               />
//             </div>
//             <div className="field">
//               <label htmlFor="desc">Add Description:</label>
//               <input
//                 type="text"
//                 name="desc"
//                 className="input"
//                 value={AddDescription}
//                 onChange={setForm}
//               />
//             </div>
//             {/* <div className="field mob">
//               <label htmlFor="mob">Mobile No.:</label>
//               <input
//                 type="number"
//                 name="mob"
//                 className="input"
//                 value={MobileNo}
//                 onChange={setForm}
//               />
//             </div> */}
//             {/* <button className="verify">
//               Verify Mobile <img src={check} alt="" />
//             </button> */}
//           </form>
//           <button className="nextpage" onClick={() => navigation.next()}>
//             Team Details <img src={arrow} alt="" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Addform;



import React, { Component } from "react";

export default class AddForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, inputChange } = this.props;

    return (
      <div className="addform">
        <div className="container">
          <h1 className="heading">Register Idea</h1>
          <div className="main-container">
            <form>
              <div className="field">
                <label htmlFor="TeamName">Team Name:</label>
                <input
                  type="text"
                  name="TeamName"
                  className="input"
                  onChange={inputChange("TeamName")}
                  value={values.TeamName}
                />
              </div>
              <div className="field">
                <label htmlFor="TeamLeader">Team Leader:</label>
                <input
                  type="text"
                  name="TeamLeader"
                  className="input"
                  onChange={inputChange("TeamLeader")}
                  value={values.TeamLeader}
                />
              </div>
              <div className="field">
                <label htmlFor="RollNo">Roll No:</label>
                <input
                  type="text"
                  name="RollNo"
                  className="input"
                  onChange={inputChange("RollNo")}
                  value={values.RollNo}
                />
              </div>
              <div className="field">
                <label htmlFor="Branch">Branch:</label>
                <input
                  type="text"
                  name="Branch"
                  className="input"
                  onChange={inputChange("Branch")}
                  value={values.Branch}
                />
              </div>
              <div className="field">
                <label htmlFor="Email">Email id:</label>
                <input
                  type="email"
                  name="Email"
                  className="input"
                  onChange={inputChange("Email")}
                  value={values.Email}
                />
              </div>
              <div className="field">
                <label htmlFor="desc">Add Description:</label>
                <input
                  type="text"
                  name="desc"
                  className="input"
                  onChange={inputChange("AddDescription")}
                  value={values.AddDescription}
                />
              </div>
            </form>
            <button className="nextpage" onClick={this.continue}>
              Team Details
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
