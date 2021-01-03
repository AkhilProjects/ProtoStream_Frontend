import "./css/App.css";
import Home from "./Home";
import Signup from "./Signup";
import Internships from "./Internships";
import Projects from "./Projects";
import Schemes from "./Schemes";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import ErrorPage from "./ErrorPage";
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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
