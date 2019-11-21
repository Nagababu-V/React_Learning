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
function App() {
  return (
    <div className="App">
      <h1 class='error'>final error</h1>
      <h2 class={style.sucess}>jsbjdakjgKJAGNDJK</h2>
     <Great name="haii"></Great>
      <Form></Form>
      <Stylesheet cond={true}></Stylesheet>
    </div>
  );
}

export default App;
