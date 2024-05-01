import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import AS from './components/AS';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="home"><Home /></div>
        <AS/>
        <div id="services"><Services /></div>
        {/* <div id="contact"><Contact /></div> */}
      </div>
    </Router>
  );
}

export default App;
