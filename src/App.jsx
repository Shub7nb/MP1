import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import AS from './components/AS';
import SchedulePickup from './components/SchedulePickup';
import Info1 from './components/Info1';
import Members from './components/Members';
// import DonateClothes from './components/DonateClothes';
// import DonateBooks from './components/DonateBooks';
// import StayInformed from './components/StayInformed';
// import CanItBeRecycled from './components/CanItBeRecycled';
// import MakeBetterChoices from './components/MakeBetterChoices';

function App() {
  return (
    // <Router>
      <div className="App">
        <Navbar />
        <div id="home"><Home /></div>
         <div id="as"><AS /></div>
        <div id="services"><Services /></div>
        <div id = "info1"><Info1 /></div>
        <div id = "members"><Members /></div>
        <div id = "contact"><Contact /></div>



       
        {/* <div id="contact"><Contact /></div> */}
        {/* <Routes> */}
          {/* <Route path="/schedule-pickup" element={<SchedulePickup />} /> */}
          
          {/* <Route path="/donate-clothes" element={<DonateClothes />} />
          <Route path="/donate-books" element={<DonateBooks />} />
          <Route path="/stay-informed" element={<StayInformed />} />
          <Route path="/can-be-recycled" element={<CanItBeRecycled />} />
          <Route path="/make-better-choices" element={<MakeBetterChoices />} /> */}

        {/* </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
