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
import Stylesheet from './components/Stylesheet'
import './components/appStyle.css'
import Form from './components/Form'
import style from './components/appStyle.module.css'
import Fragmentdemo from './components/Fragmentdemo'
import Table from './components/Table';
import Parentcom from './components/Parentcom'
function App() {
  return (
    <div className="App">
     <Parentcom></Parentcom>
    </div>
  );
}

export default App;
