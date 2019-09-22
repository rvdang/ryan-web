import React from "react";
import "./App.css";
import { Projects } from "./project";
import { LoadingScreen, Navbar, Badge, Footer } from "./loading";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Resume } from "./pages/resume";

function App() {
  return (
    <LoadingScreen>
      <div className="max fadeIn">
        <Router basename="/">
          <Navbar />
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/resume" component={Resume} />
            {/* <Route exact path="/projects" component={Projects} /> */}
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
        <Footer />
      </div>
    </LoadingScreen>
  );
}

export default App;
