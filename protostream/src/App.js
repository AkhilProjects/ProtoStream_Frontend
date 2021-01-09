import "./css/App.css";
// <<<<<<< HEAD
// <<<<<<< HEAD
import Home from "./Home";
import Signup from "./components/Signup";
import Internships from "./Internships";
import Projects from "./Projects";
import Schemes from "./Schemes";
import DashBoard from "./DashBoard";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/footer/Contact";
import Terms from "./components/footer/Terms";
import Team from "./components/footer/Team";
import FAQ from "./components/footer/FAQ";
import ProjectHackathon from "./components/Projects/ProjectHackathon";
import Innotech from "./components/Projects/Innotech";
import Addform from "./components/Projects/Form/Addform";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Finalyear from "./components/Projects/finalyear/Finalyear";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/internships" exact component={Internships} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/dashboard" exact component={DashBoard} />

          <Route
            path="/projects/hackathons"
            exact
            component={ProjectHackathon}
          />
          <Route
            path="/projects/innotech"
            exact
            component={Innotech}
          />
          <Route path="/projects/finalyear" exact component={Finalyear} />
          <Route path="/projects/addform" exact component={Addform} />
          <Route path="/schemes" exact component={Schemes} />
          <Route path="/about" exact component={About} />
          <Route path="/errorpage" exact component={ErrorPage} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Signup} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/privacypolicy" exact component={Terms} />
          <Route path="/faqs" exact component={FAQ} />
          <Route path="/team" exact component={Team} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
// =======
// import React from "react";

// const App = () => {
//   return <div></div>;
// // >>>>>>> origin/master
// };
// =======

// import React from "react";

// const App = () => {
//   return <div>hi</div>;
// };
// >>>>>>> 5b68783e8e249400ad6ce5901f9f473fbf68013a

export default App;
