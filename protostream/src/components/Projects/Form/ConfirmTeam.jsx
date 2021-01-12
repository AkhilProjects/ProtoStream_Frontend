import React from 'react'
import "../../../css/Projects/Form/form.css";
import CardTeam from './CardTeam';
import check from "../../../assets/images/check.svg";

function ConfirmTeam({ formData, navigation }) {
    const {                                  
      MemberName,
      MemberBranch,
      MemberRollNo,
      MemberEmail,
      MemberName1,
      MemberBranch1,
      MemberRollNo1,
      MemberEmail1,
      MemberName2,
      MemberBranch2,
      MemberRollNo2,
      MemberEmail2,
    } = formData;

  return (
    <div className="addform">
      <div className="container">
        <h1 className="heading">Confirm Team</h1>
        <div className="main-container">
          <div className="details">
            <h1>Your team</h1>
            <div className="cards">
              <CardTeam
                name={MemberName}
                rno={MemberRollNo}
                branch={MemberBranch}
                email={MemberEmail}
              />
              <CardTeam
                name={MemberName1}
                rno={MemberRollNo1}
                branch={MemberBranch1}
                email={MemberEmail1}
              />
              <CardTeam
                name={MemberName2}
                rno={MemberRollNo2}
                branch={MemberBranch2}
                email={MemberEmail2}
              />
            </div>
            <button className="nextpage" onClick={() => navigation.next()}>
              Confirm <img src={check} alt="" />
            </button>
            <button className="nextpage prev" onClick={() => navigation.previous()}>
              Edit
              <img src={check} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmTeam
