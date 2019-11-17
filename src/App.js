import React from 'react';
import logo from './logo.svg';
import './App.css';
import Great from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'
import Fclick from './components/Fclick'
import Cclick from './components/Cclick'
import Eventbind from './components/Eventbind'
import Parentcompo from './components/Parentcompo'
import Welcome from './components/Welcome'
function App() {
  return (
    <div className="App">
     <Great name="haii"></Great>
     <Fclick></Fclick>
      <Counter/>
      <Eventbind></Eventbind>
      <Parentcompo></Parentcompo>
    </div>
  );
}

export default App;
