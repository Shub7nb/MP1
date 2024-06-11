import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Contact = () => {
  return (
    <footer className="bg-green-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Our Office</h2>
            <ul>
              <li className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                  <circle cx="12" cy="9" r="2.5"></circle>
                </svg>
                Kle Technological University.
              </li>
              <li className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 14h4v2h-4z" opacity=".3"></path>
                  <path d="M20 15.5V14c0-1.66-1.34-3-3-3h-2.5c-.82 0-1.54.4-2 1.02-.46-.62-1.18-1.02-2-1.02H7c-1.66 0-3 1.34-3 3v1.5c0 1.93 1.57 3.5 3.5 3.5H5v2h2v-2h10v2h2v-2h-1.5c1.93 0 3.5-1.57 3.5-3.5zM19 17h-4v-1h4v1zm-8 0h-4v-1h4v1zm-5-4.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v1H6v-1zM18 12v-1.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V12h-5z"></path>
                </svg>
                91 7795843157
              </li>
              <li className="flex items-center mb-2">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 11c1.66 0 3-1.34 3-3S13.66 5 12 5 9 6.34 9 8s1.34 3 3 3zm0-10C6.48 1 2 5.48 2 11c0 5.52 4.48 10 10 10s10-4.48 10-10c0-5.52-4.48-10-10-10zm1 17.93V17H11v1.93c-2.83-.48-5-2.94-5-5.93h1.07c.48 1.99 2.29 3.57 4.43 3.93H11v-2h2v2h.5c.41 0 .75.34.75.75s-.34.75-.75.75h-.5v2c1.14-.14 2.12-.51 3-1.03-.25-.35-.5-.73-.75-1.13-.77.53-1.67.93-2.75 1.18z"></path>
                </svg>
                sansarinnovate@gmail.com
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-green-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Services</h2>
            <ul>
              <li className="mb-2"><Link smooth to="/#services" className="text-gray-300 hover:text-green-400">Schedule A Pickup</Link></li>
              <li className="mb-2"><Link smooth to="/#services" className="text-gray-300 hover:text-green-400">Donate Books</Link></li>
              <li className="mb-2"><Link smooth to="/#services" className="text-gray-300 hover:text-green-400">Donate Clothes</Link></li>
              <li className="mb-2"><Link smooth to="/#services" className="text-gray-300 hover:text-green-400">Latest News</Link></li>
              <li className="mb-2"><Link smooth to="/#services" className="text-gray-300 hover:text-green-400">Recycler Helper</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><Link smooth to="/#about" className="text-gray-300 hover:text-green-400">About Us</Link></li>
              <li className="mb-2"><Link smooth to="/#contact" className="text-gray-300 hover:text-green-400">Contact Us</Link></li>
              <li className="mb-2"><Link smooth to="/#services" className="text-gray-300 hover:text-green-400">Our Services</Link></li>
              <li className="mb-2"><Link smooth to="/#terms" className="text-gray-300 hover:text-green-400">Terms & Condition</Link></li>
              <li className="mb-2"><Link smooth to="/#support" className="text-gray-300 hover:text-green-400">Support</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Newsletter</h2>
            <p className="text-gray-300 mb-4">Join our newsletter and stay updated about all things green and environmentally friendly in Mangalore</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="p-2 rounded-l bg-green-600 text-gray-300 placeholder-green-300 focus:outline-none focus:bg-green-500" />
              <button className="p-2 rounded-r bg-green-700 text-gray-300 hover:bg-green-600">SignUp</button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© 2024 Kletech, All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
