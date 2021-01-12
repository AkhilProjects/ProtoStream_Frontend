import React, { useState, createContext } from "react";
// import  './projects.json'
import { allHackathons } from "../../auth/index";
export const HackathonContext = createContext();

export const hackathonProvider = async (props) => {
  const AllHackathons = allHackathons();

  return (
    <HackathonContext.Provider>{props.children}</HackathonContext.Provider>
  );
};
