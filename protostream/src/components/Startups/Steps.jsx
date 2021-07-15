import React, { useState } from "react";
import Step from "./Step";
import "./css/Steps.css";
import Badge from "../../assets/images/Badge.svg";
import Download from "../../assets/images/clouddownload.svg";
import Upload from "../../assets/images/cloudupload.svg";
import { isAuthenticated, otp } from "../../auth";

function Steps() {
  const [disabled, setDisabled] = useState(false);
  const [isStepOne, setIsStepOne] = useState(true)

  return (
    <div className="Steps">
      <Step
        head="Step 1"
        subHead="Register Mobile Number and download NDA"
        icon={Badge}
        link="verify"
        isdisabled={true}
        isStepOne={isStepOne}
      />
      <Step
        head="Step 2"
        subHead="Download NDA, get it verify by TBI "
        icon={Download}
        link="download-NDA"
        isdisabled={false}
        isStepOne={false}
      />
      <Step
        isStepOne={false}
        head="Step 3"
        subHead="Upload NDA and Startup Name"
        icon={Upload}
        link="upload-NDA"
        isdisabled={false}
      />
    </div>
  );
}

export default Steps;
