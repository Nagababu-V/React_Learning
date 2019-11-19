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
import Usergreet from './components/Usergreet';
import NameList from './components/NameList';
function App() {
  return (
    <div className="App">
     <Great name="haii"></Great>
      <Usergreet></Usergreet>
      <NameList></NameList>
    </div>
  );
}

export default App;
