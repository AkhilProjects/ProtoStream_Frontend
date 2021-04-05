import React from "react";
import ErrorPage from "./ErrorPage";

function Error99() {
  return (
    <ErrorPage
      error_name="99"
      error_msg="You Don’t have access to this page please go back."
    />
  );
}

export default Error99;
