import React from "react";
import "./App.css";
import { Projects } from "./project";
import { LoadingScreen, Navbar, Badge, Footer, Mountain } from "./loading";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Resume } from "./pages/resume";
import { CompactResume } from "./pages/compactresume";

function App() {
  return (
    <LoadingScreen>
      <meta name="viewport" content="width=1024" />
      <div className="max fadeIn">
        <Router basename="/">
          <Navbar />
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/resume" component={Resume} />
            {/* <Route exact path="/projects" component={Projects} /> */}
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/resume/compact" component={CompactResume} />
          </Switch>
        </Router>
        {/* <Mountain/> */}
        {/* <Footer /> */}
      </div>
    </LoadingScreen>
  );
}

export default App;
