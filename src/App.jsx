// src/App.jsx
import React from 'react';
import Home from './components/Home';
import Services from './components/Services';
import AS from './components/AS';
import Info1 from './components/Info1';
import Members from './components/Members';

function App() {
  return (
    <div className="App">
      <div className="pt-20">
        <div id="home"><Home /></div>
        <div id="as"><AS /></div>
        <div id="services"><Services /></div>
        <div id="info1"><Info1 /></div>
        <div id="members"><Members /></div>
      </div>
    </div>
  );
}

export default App;
