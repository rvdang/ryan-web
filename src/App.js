import React from 'react';
import './App.css';
import { Projects } from './project';
import { LoadingScreen, Navbar } from './loading';


function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", position:"absolute", top: 0, left: 0, height: "100%", width: "100%"}}>
      <Navbar/>
      <LoadingScreen>
        <Projects/>
      </LoadingScreen>
    </div>
    
      
  );
}

export default App;
