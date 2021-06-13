import React from 'react'
import '../../css/footer/Team.css'
import Member from './Member'
import Footer from "../Footer";
import Siddhant from "../../assets/images/Siddhant.jpeg";

function Team() {
    return (
      <div>
        <div className="Team">
          <h1 className="head"> The Team</h1>
          <div style={{ display: "inline-block" }}>
            <Member
              className="leader"
              name="Siddhant  Siwach "
              session="CSE 2017-2021"
              work="Ideation and  Design"
              image={Siddhant}
            />
          </div>
          <div className="container">
            <Member
              className="member_card"
              name="Himanshu Pandey"
              session="C0 2019-2023"
              work="Front-end"
              image="https://avatars.githubusercontent.com/u/58338799?v=4"
            />
            <Member
              className="member_card"
              name=" Ayoushman Vasistha "
              session="CSE 2019-2023"
              work="Front-end"
              image="https://avatars.githubusercontent.com/u/54800534?v=4"
            />
            <Member
              className="member_card"
              name="Akhil siraswal "
              session="CSE 2019-2023"
              work="Back-End"
              image="https://avatars.githubusercontent.com/u/50474250?v=4"
            />
            <Member
              className="member_card"
              name=" Ujjwal Choudhry "
              session="CSE 2019-2023"
              work="Back-End"
              image="https://avatars.githubusercontent.com/u/67314893?v=4"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Team
