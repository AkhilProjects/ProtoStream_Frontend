import Home from "./Home";
import Signup from "./components/Signup";
import Internships from "./Internships";
import Projects from "./Projects";
import Startups from "./Startups";
import RegisterStartup from './components/Startups/RegisterStartup';
import Schemes from "./Schemes";
import Competitions from './components/Schemes/Competitions'
import SchemeForm from "./components/Schemes/SchemeForm";
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
import Addform from "./components/Projects/Form/Addform";
import Form from "./components/Projects/Form/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Finalyear from "./components/Projects/finalyear/Finalyear";
import PrivateRoute from "./auth/helper/privateRoutes";

// temp ======================================

import Congo from './Temp/Congo'
import DownNDA from "./Temp/DownNDA";
import UploadNDA from "./Temp/UploadNDA";

// temp ========================================


const Routes = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
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

          {/* temp ===================== */}

          <PrivateRoute path="/temp/dnda" exact component={DownNDA} />
          <PrivateRoute path="/temp/unda" exact component={UploadNDA} />
          <PrivateRoute path="/temp/congo" exact component={Congo} />

          {/* temp======================= */}

          <Route path="/about" exact component={About} />
          <PrivateRoute path="/errorpage" exact component={ErrorPage} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Signup} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/privacypolicy" exact component={Terms} />
          <Route path="/faqs" exact component={FAQ} />
          <Route path="/team" exact component={Team} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default Routes;
