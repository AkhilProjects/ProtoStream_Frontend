import React from "react";
import Result from "./components/Result";
import med from './illustration/med.svg'

function Results2() {
  return (
    <Result
      heading="Keep Trying  , I know you’ve got it in You"
      quote="Fail early, fail often , but always fail forward"
      suggestion="Also , do check these resources . They would help"
      btn="Check Resources"
      link="/resources"
      image={med}
    />
  );
}

export default Results2;
