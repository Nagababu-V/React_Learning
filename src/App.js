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
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import ForwadPar from './components/ForwadPar'
import PortalDemo from './components/PortalDemo';
import Login from './components/Login';
import Hero from './components/Hero'
import Errorb from './components/Errorb'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
function App() {
  return (
    <div className="App">
      <Errorb>
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
      </Errorb>
    </div>
  );
}

export default App;
