import Home from "./Home";
import Signup from "./components/Signup";
// import Internships from "./Internships";
import Projects from "./Projects";
import Startups from "./Startups";
import RegisterStartup from './components/Startups/RegisterStartup';
import Schemes from "./Schemes";
import Competitions from './components/Schemes/Competitions'
import SchemeForm from "./components/Schemes/SchemeForm";
import DashBoard from "./DashBoard";
import About from "./components/footer/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error404 from "./components/Error404";
import Error99 from "./components/Error99";
import Contact from "./components/footer/Contact";
import Terms from "./components/footer/Terms";
import Team from "./components/footer/Team";
import ProjectHackathon from "./components/Projects/ProjectHackathon";
import ProjectInnotech from "./components/Projects/ProjectInnotech";
import Addform from "./components/Projects/Form/Addform";
import Form from "./components/Projects/Form/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Finalyear from "./components/Projects/finalyear/Finalyear";
import PrivateRoute from "./auth/helper/privateRoutes";

//Temp

import Congrats from "./components/startup/Congrats";
import DNDA from "./components/startup/DNDA"
import UNDA from "./components/startup/UNDA";
import Internships from "./components/startup/Internships";
import FormA from "./components/startup/FormA";
import FormB from "./components/startup/FormB";
import Resources from "./components/Resources/Resources";


import Signin from './components/Authentication/Signin'
import Signup2 from './components/Authentication/Signup'



const Routes = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <PrivateRoute path="/internships" exact component={Internships} /> */}

          {/* Temp */}

          <PrivateRoute path="/registered-startup" exact component={Congrats} />
          <PrivateRoute path="/download-NDA" exact component={DNDA} />
          <PrivateRoute path="/upload-NDA" exact component={UNDA} />
          <PrivateRoute path="/startup-details" exact component={FormA} />
          <PrivateRoute path="/list-internships" exact component={FormB} />

          {/* Temp */}
          <PrivateRoute path="/internships" exact component={Internships} />
          <PrivateRoute path="/projects" exact component={Projects} />
          <PrivateRoute path="/Startups" exact component={Startups} />
          <PrivateRoute
            path="/Startups/register"
            exact
            component={RegisterStartup}
          />
          <PrivateRoute path="/user/dashboard" exact component={DashBoard} />
          <PrivateRoute
            path="/projects/hackathons"
            exact
            component={ProjectHackathon}
          />
          <PrivateRoute
            path="/projects/innotech"
            exact
            component={ProjectInnotech}
          />
          <PrivateRoute
            path="/projects/finalyear"
            exact
            component={Finalyear}
          />
          <PrivateRoute path="/projects/addform" exact component={Form} />
          <PrivateRoute path="/schemes" exact component={Schemes} />
          <PrivateRoute
            path="/schemes/competitions"
            exact
            component={Competitions}
          />
          <PrivateRoute
            path="/schemes/addscheme"
            exact
            component={SchemeForm}
          />
          {/* <Route path="/about" exact component={About} /> */}
          <PrivateRoute path="/error_404" exact component={Error404} />
          <PrivateRoute path="/error_99" exact component={Error99} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup2" exact component={Signup2} />
          <Route path="/login" exact component={Signup} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/team" exact component={Team} />
          <Route path="/about" exact component={About} />
          <Route path="/resources" exact component={Resources} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default Routes;
