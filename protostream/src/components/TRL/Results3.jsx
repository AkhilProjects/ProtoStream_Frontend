import React from "react";
import Result from "./components/Result";
import High from "./illustration/high.svg";

function Results3() {
  return (
    <Result
      heading="You Rock ! Signup for a Startup and Lets’ Build"
      quote="If you are persistent, you will get it. if you are consistent you will keep it."
      suggestion="Go to the Startup Page and Fill in the details"
      btn="Register Startup"
      image={High}
    />
  );
}

export default Results3;
