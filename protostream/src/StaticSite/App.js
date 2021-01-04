import "./css/App.css";
import Home from "./Home";
import Signup from "./components/Signup";
import Internships from "./Internships";
import Projects from "./Projects";
import Schemes from "./Schemes";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/footer/Contact";
import Terms from "./components/footer/Terms";
import Team from "./components/footer/Team";
import FAQ from "./components/footer/FAQ";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/internships" exact component={Internships} />
          <Route path="/projects" exact component={Projects} />
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
};

export default App;
