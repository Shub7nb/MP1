// src/components/Layout.jsx
import React from 'react';
import Navbar from './Navbar';
import Contact from './Contact';

const Layout = ({ setShowLoginModal, children }) => {
  return (
    <div className="layout">
      <Navbar setShowLoginModal={setShowLoginModal} />
      <div className="main-content pt-20">
        {children}
      </div>
      <Contact />
    </div>
  );
};

export default Layout;
