// import React from 'react'
import "../../../css/Projects/Form/form.css";
// import arrow from "../../../assets/images/arrow.svg";

// function Submit({ formData, navigation }) {
//     //  const { go } = navigation;
//      const {
//        HackathonName,
//        TeamName,
//        TeamLeader,
//        RollNo,
//        Branch,
//        Email,
//        AddDescription,
//        MemberName,
//        MemberBranch,
//        MemberRollNo,
//        MemberEmail,
//        MemberName1,
//        MemberBranch1,
//        MemberRollNo1,
//        MemberEmail1,
//        MemberName2,
//        MemberBranch2,
//        MemberRollNo2,
//        MemberEmail2,
//      } = formData;
//   return (
//     <div className="addform">
//       <div className="container">
//         <h1 className="heading">Confirm Registration</h1>
//         <div className="main-container">
//           <div className=" confirm">
//             <h1 className="title">{TeamName}</h1>
//             <div className="details">
//               <div className="left">
//                 <div className="details-sec">
//                   <p className="head">Team Leader: </p>
//                   <span className="ans">{TeamLeader}</span>
//                 </div>
//                 <div className="details-sec">
//                   <p className="head">Roll Number: </p>
//                   <span className="ans">{RollNo}</span>
//                 </div>
//                 <div className="details-sec">
//                   <p className="head">Branch: </p>
//                   <span className="ans">{Branch}</span>
//                 </div>
//                 <div className="details-sec column">
//                   <p className="head">Summary: </p>
//                   <span className="ans">{AddDescription}</span>
//                 </div>
//               </div>
//               <div className="right">
//                 <div className="details-sec column">
//                   <p className="head">Team Members Details: </p>
//                   <ul>
//                     <li>
//                       {MemberName} {MemberRollNo} {MemberBranch}
//                     </li>
//                     <li>
//                       {MemberName1} {MemberRollNo1} {MemberBranch1}
//                     </li>
//                     <li>
//                       {MemberName2} {MemberRollNo2} {MemberBranch2}
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="details-sec">
//                   <p className="head">Submission Date: </p>
//                   <span className="ans">17/05/2021</span>
//                 </div>
//               </div>
//             </div>
           
//           </div>
//           <button className="nextpage" onClick={() => navigation.next()}>
//             Register <img src={arrow} alt="" />
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

// export default Submit


import React from 'react'
import {NavLink} from "react-router-dom";

function Submit() {
  return (
    <div className="submit-container">
      <div className="submit">
        <h1>Your Hackathon is Successfully Registered.</h1>
        <NavLink to="/projects/hackathons" className='btn'>
          <button>Go to Hackathons</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Submit
