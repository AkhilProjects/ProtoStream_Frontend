import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./components/Home/LandingPage";
import Prototyping from "./components/Home/Prototyping";
import Hackathon from "./components/Home/Hackathon";
import Resources from "./components/Home/Resources";
import Team from "./components/Home/Team";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <LandingPage />
      <Team />
      <Prototyping />
      <Hackathon />
      <Resources />
      <Footer />
    </div>
  );
};

export default Home;
