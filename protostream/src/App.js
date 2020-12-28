import "./css/App.css";
import Home from "./Home";
import Signup from "./Signup";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
};

export default App;
