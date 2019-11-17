import React from 'react';
import logo from './logo.svg';
import './App.css';
import Great from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'
import Fclick from './components/Fclick'
import Cclick from './components/Cclick'
import Eventbind from './components/Eventbind'
function App() {
  return (
    <div className="App">
      <Great name="haii"></Great>
      <Counter/>
      <Eventbind></Eventbind>
    </div>
  );
}

export default App;
