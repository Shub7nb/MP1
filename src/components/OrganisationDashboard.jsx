// src/components/OrganizationDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import AS from './AS';
import Info1 from './Info1';
import Members from './Members';

const OrganizationDashboard = () => {
  const navigate = useNavigate();

  const handleServiceClick = (path) => {
    navigate(`${path}org`);
  };

  return (
    <div className="App">
      <Navbar onLogoutClick={() => navigate('/')} />
      <div className="pt-20">
        <div id="home"><Home /></div>
        <div id="as"><AS /></div>
        <div id="services"><Services onServiceClick={handleServiceClick} /></div>
        <div id="info1"><Info1 /></div>
        <div id="members"><Members /></div>
        <div id="contact"><Contact /></div>
      </div>
    </div>
  );
};

export default OrganizationDashboard;
