import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./components/Home/LandingPage";
import Team from "./components/Home/Team";

const Home = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
