import React from 'react';
import './App.css';
import { Projects } from './project';
import { LoadingScreen, Logo, Badge } from './loading';


function App() {
  return (
    <div style={{position:"absolute", top: 0, left: 0, height: "100%", width: "100%"}}>
      <Logo/>
      <LoadingScreen>
        <Projects/>
      </LoadingScreen>
    </div>
    
      
  );
}

export default App;
