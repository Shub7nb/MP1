// src/App.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import AS from './components/AS';
import Info1 from './components/Info1';
import Members from './components/Members';
import LoginModal from './components/Login';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (username, password, userType) => {
    if (username === 'user' && password === '123') {
      setShowLoginModal(false);
      navigate(`/user-dashboard`);
    } else if (username === 'org' && password === '123') {
      setShowLoginModal(false);
      navigate(`/organization-dashboard`);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={`App ${showLoginModal ? 'blur-background' : ''}`}>
      <Navbar onLoginClick={() => setShowLoginModal(true)} />
      <div className="pt-20">
        <div id="home"><Home /></div>
        <div id="as"><AS /></div>
        <div id="services"><Services /></div>
        <div id="info1"><Info1 /></div>
        <div id="members"><Members /></div>
        <div id="contact"><Contact /></div>
      </div>

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;
