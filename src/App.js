import React from 'react';
import './App.css';
import { Projects } from './project';
import { LoadingScreen, Navbar, Badge, Footer, AboutMe } from './loading';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
      <LoadingScreen>
        
          <div className="max fadeIn">
          <Router>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={AboutMe}/>
              <Route exact path='/projects' component={Projects}/>
            </Switch>
            </Router>
            <Footer/>
          </div>
        
      </LoadingScreen>
    
      
  );
}

export default App;
