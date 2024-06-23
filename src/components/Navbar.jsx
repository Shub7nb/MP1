// src/components/Navbar.jsx
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLoginModal }) => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white text-green-800 w-full shadow h-20 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center h-full">
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold mr-8">Sansar</Link>
        </div>
        <div className="flex space-x-8 text-lg">
          <Link smooth to="/#home" className="hover:text-green-600">Home</Link>
          <Link smooth to="/#as" className="hover:text-green-600">About</Link>
          <Link smooth to="/#services" className="hover:text-green-600">Services</Link>
          <Link smooth to="/#members" className="hover:text-green-600">Team</Link>
          <Link smooth to="/#contact" className="hover:text-green-600">Contact</Link>
        </div>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-red-800 text-white hover:bg-red-900 px-4 py-2 rounded-full text-lg font-bold transition-colors duration-200"
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => setShowLoginModal(true)}
            className="bg-green-800 text-white hover:bg-green-900 px-4 py-2 rounded-full text-lg font-bold transition-colors duration-200"
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
