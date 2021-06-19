import React from "react";
import Result from "./components/Result";
import Low from "./illustration/Low.svg";

function Results1() {
  return (
    <Result
      heading="You Need to  Study Hard But Stay Inventive"
      quote="WORK HARD, DREAM BIG."
      suggestion="Also , do check these resources . They would help"
      btn="Check Resources"
      link="/resources"
      image={Low}
    />
  );
}

export default Results1;
