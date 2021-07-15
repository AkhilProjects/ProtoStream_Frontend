import React, { useState } from "react";
import Step from "../Step";
import "../css/Steps.css";
import Badge from "../../../assets/images/Badge.svg";
import file from "../../../assets/images/edit.svg";

function MainSteps() {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="Steps">
      <Step
        head="Step 1"
        subHead="Register Mobile Number and download NDA"
        icon={Badge}
        link="verify"
        isdisabled={disabled}
        isStepOne={true}
      />
      <Step
        head="Step 2"
        subHead="Check you NDA verification of Startups"
        icon={file}
        link="NDA-Verification"
        isdisabled={false}
      />
      <div className="instructions">
        <h1 className="heading">Complete these steps to move forward..</h1>
        <p className="inst">
          Step 1 : Go to Startup section and register your mobile number.
        </p>
        <p className="inst">
          Step 2 : Upload your NDA signed by TBI and submit for verification.
        </p>
      </div>
    </div>
  );
}

export default MainSteps;
