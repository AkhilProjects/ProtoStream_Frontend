import React from "react";
import Card from "./components/Internship/Card"
import './css/Internship/internship.css'

const InternShips = () => {
  return (
    <div className="internships">
      <h1 className="head">Internships</h1>
      <div className="cards">
        <Card
          name="Startup One"
          position_title="Developer"
          positions="2"
          reward="Certificate"
          summary="This is the position brief that was given at the end of startup process 
by the Startup Founder and describes in detail about the job role, the 
tasks that may be provided during the internship and the skills that may 
or must be required to apply for this position . Also they can also mention 
the details about branch requirements and else in the brief only   "
        />
        <Card
          name="Startup two"
          position_title="Developer"
          positions="3"
          reward="Certificate"
          summary="This is the position brief that was given at the end of startup process 
by the Startup Founder and describes in detail about the job role, the 
tasks that may be provided during the internship and the skills that may 
or must be required to apply for this position . Also they can also mention 
the details about branch requirements and else in the brief only   "
        />
        <Card
          name="Startup three"
          position_title="Developer"
          positions="1"
          reward="Certificate"
          summary="This is the position brief that was given at the end of startup process 
by the Startup Founder and describes in detail about the job role, the 
tasks that may be provided during the internship and the skills that may 
or must be required to apply for this position . Also they can also mention 
the details about branch requirements and else in the brief only   "
        />
        <Card
          name="Startup four"
          position_title="Developer"
          positions="2"
          reward="Certificate"
          summary="This is the position brief that was given at the end of startup process 
by the Startup Founder and describes in detail about the job role, the 
tasks that may be provided during the internship and the skills that may 
or must be required to apply for this position . Also they can also mention 
the details about branch requirements and else in the brief only   "
        />
        <Card
          name="Startup five"
          position_title="Developer"
          positions="3"
          reward="Certificate"
          summary="This is the position brief that was given at the end of startup process 
by the Startup Founder and describes in detail about the job role, the 
tasks that may be provided during the internship and the skills that may 
or must be required to apply for this position . Also they can also mention 
the details about branch requirements and else in the brief only   "
        />
        <Card
          name="Startup six"
          position_title="Developer"
          positions="4"
          reward="Certificate"
          summary="This is the position brief that was given at the end of startup process 
by the Startup Founder and describes in detail about the job role, the 
tasks that may be provided during the internship and the skills that may 
or must be required to apply for this position . Also they can also mention 
the details about branch requirements and else in the brief only   "
        />
      </div>
    </div>
  );
};

export default InternShips;
