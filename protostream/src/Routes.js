import Home from "./Home";
// import Signup from "./components/Signup";
// import Internships from "./Internships";
import Projects from "./Projects";
import Startups from "./Startups";
import AllStartups from './components/Startups/Startups'
import Verify from './components/Startups/RegisterStartup';
import Schemes from "./Schemes";
import Competitions from './components/Schemes/Competitions'
import SchemeForm from "./components/Schemes/SchemeForm";
import StudentDashboard from "./components/Dashboard/StudentDashboard";
import StartupDashboard from "./components/Dashboard/StartupDashboard";
import TBIDashboard from "./components/Dashboard/TBIDashboard";
import About from "./components/footer/About";
import Header from "./components/Header";
import Error404 from "./components/Error404";
import Error99 from "./components/Error99";
import Contact from "./components/footer/Contact";
import Terms from "./components/footer/Terms";
import Team from "./components/footer/Team";
import ProjectHackathon from "./components/Projects/ProjectHackathon";
import ProjectInnotech from "./components/Projects/ProjectInnotech";
import Form from "./components/Projects/Form/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Finalyear from "./components/Projects/finalyear/Finalyear";
import PrivateRoute from "./auth/helper/privateRoutes";


import StartupDetails from './components/Startups/StartupDetails'

import TRLpage from './components/TRL/TRLpage'


import NidhiEir from './components/Schemes/static/NidhiEir'
import NidhiPrayas from "./components/Schemes/static/NidhiPrayas";
import ITPolicy from './components/Schemes/static/ITPolicy'

//Temp

import Congrats from "./components/startup/Congrats";
import DNDA from "./components/startup/DNDA"
import UNDA from "./components/startup/UNDA";
import Internships from "./components/startup/Internships";
import FormA from "./components/startup/FormA";
import FormB from "./components/startup/FormB";
import Resources from "./components/Resources/Resources";

import Steps from "./components/Startups/Steps"
import MainSteps from './components/Startups/Form/MainSteps'
import NDAVerification from "./components/Startups/Form/NDAVerification";


import Signin from './components/Authentication/Signin'
import Signup2 from './components/Authentication/Signup'
import RegistrationForm from "./components/Startups/Form/RegistrationForm";




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
          {/* <PrivateRoute path="/download-NDA" exact component={DNDA} />
          <PrivateRoute path="/upload-NDA" exact component={UNDA} /> */}
          
          <PrivateRoute path="/startup-details" exact component={FormA} />
          <PrivateRoute path="/list-internships" exact component={FormB} />
          {/* Temp */}
          <PrivateRoute path="/internships" exact component={Internships} />
          <PrivateRoute path="/projects" exact component={Projects} />
          <PrivateRoute path="/Startups" exact component={Startups} />
          <PrivateRoute path="/Startups/steps" exact component={Steps} />
          <PrivateRoute path="/Startups/verify" exact component={Verify} />
          <PrivateRoute path="/Startups/download-NDA" exact component={DNDA} />
          <PrivateRoute path="/Startups/upload-NDA" exact component={UNDA} />
          <PrivateRoute
            path="/Startups/Registration_steps"
            exact
            component={MainSteps}
          />
          <PrivateRoute
            path="/Startups/NDA-Verification"
            exact
            component={NDAVerification}
          />
          <PrivateRoute
            path="/Startups/Startup-form"
            exact
            component={RegistrationForm}
          />
          <PrivateRoute
            path="/Startups/allstartups"
            exact
            component={AllStartups}
          />
          <PrivateRoute
            path="/Startups/startupdetails"
            exact
            component={StartupDetails}
          />
          {/* <PrivateRoute
            path="/Startups/register"
            exact
            component={RegisterStartup}
          /> */}
          <PrivateRoute
            path="/user/dashboard"
            exact
            component={StudentDashboard}
          />
          <PrivateRoute
            path="/user/startup_dashboard"
            exact
            component={StartupDashboard}
          />{" "}
          <PrivateRoute
            path="/user/TBI-dashboard"
            exact
            component={TBIDashboard}
          />
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
          <Route path="/error_404" exact component={Error404} />
          <PrivateRoute path="/error_99" exact component={Error99} />
          {/* <Route path="/signup" exact component={Signup} /> */}
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup2} />
          <Route path="/login" exact component={Signup2} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/team" exact component={Team} />
          <Route path="/about" exact component={About} />
          <Route path="/resources" exact component={Resources} />
          <Route path="/trl" exact component={TRLpage} />
          <Route path="/schemes/NidhiEir" exact component={NidhiEir} />
          <Route path="/schemes/NidhiPrayas" exact component={NidhiPrayas} />
          <Route path="/schemes/it_policy" exact component={ITPolicy} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default Routes;
