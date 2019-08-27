import React from 'react';
import './App.css';
import { Projects } from './project';
import { LoadingScreen } from './loading';


function App() {
  return (
    <div style={{position:"absolute", top: 50, left: 0, height: "50%", width: "50%"}}>
      <LoadingScreen/>
    </div>
    
      
  );
}

export default App;
