import React from "react";
import "./App.css";
import { Projects } from "./project";
import { LoadingScreen, Navbar, Badge, Footer, Mountain } from "./loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { Resume } from "./pages/resume";
import { CompactResume } from "./pages/compactresume";

function App() {
  return (
    <LoadingScreen>
      <meta name="viewport" content="width=1024" />
      <div className="max fadeIn">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route path="/resume" component={Resume} />
            {/* <Route exact path="/projects" component={Projects} /> */}
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
        {/* <Mountain/> */}
        {/* <Footer /> */}
      </div>
    </LoadingScreen>
  );
}

export default App;
