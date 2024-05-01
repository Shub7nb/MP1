import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <nav className="bg-white text-green-800 w-full shadow h-20">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center h-full">
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold mr-8">Sansar</Link>
        </div>
        <div className="flex space-x-8 text-lg">
          <Link smooth to="/#home" className="hover:text-green-600">Home</Link>
          <Link smooth to="/#about" className="hover:text-green-600">About</Link>
          <Link smooth to="/#services" className="hover:text-green-600">Services</Link>
          <Link smooth to="/#team" className="hover:text-green-600">Team</Link>
          <Link smooth to="/#contact" className="hover:text-green-600">Contact</Link>
        </div>
        <Link smooth to="/login" className="bg-green-800 text-white hover:bg-green-900 px-4 py-2 rounded-full text-lg font-bold transition-colors duration-200">Log In</Link>
      </div>
    </nav>
  );
};

export default Navbar;
