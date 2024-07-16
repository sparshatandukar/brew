import React, { useState } from 'react';
import logo from '../image/logo.png'

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-browninsh shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-7">
              <div>
                {/* Logo */}
                <a to="/" className="flex items-center py-2 px-2">
                  <img src={logo} alt="Logo" className="h-18 w-20 mt-0 mr-5" />
                  <span className="font-semibold text-white text-lg">Blend & Brew</span>
                </a>
              </div>
            </div>
            {/* Primary Navbar items wrapper */}
            <div className="flex justify-center flex-1">
              <div className="hidden md:flex items-center space-x-4">
                <a to="/" className="py-4 px-2 text-white border-b-4 hover:text-yellowish font-semibold ">Home</a>
                <a to="/recipe" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">Recipe</a>
                <a to="/about" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">About</a>
                <a to="/contact" className="py-4 px-2 text-white font-semibold hover:text-yellowish transition duration-300">Contact</a>
              </div>
            </div>
            {/* Secondary Navbar items */}
            <div className="hidden md:flex items-center space-x-3">
              <a to="/login" className="py-2 px-3 font-medium text-white rounded hover:bg-yellowish transition duration-300">Log In</a>
              <a to="/signup" className="py-2 px-3 font-medium text-white rounded hover:bg-yellowish transition duration-300">Sign Up</a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-6 h-6 text-white hover:text-yellowish"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul>
              <li><a to="/" className="block text-sm px-2 py-4 text-white hover:bg-yellowish font-semibold transition duration-300">Home</a></li>
              <li><a to="/recipe" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Recipe</a></li>
              <li><a to="/about" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">About</a></li>
              <li><a to="/contact" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Contact</a></li>
              <li><a to="/login" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Log In</a></li>
              <li><a to="/signup" className="block text-sm text-white px-2 py-4 hover:bg-yellowish font-semibold transition duration-300">Sign Up</a></li>
            </ul>
          </div>
        )}
      </nav>
      <div className='bg-lightGrey h-screen'>
         kkknkn
      </div>
        
      <footer className='bg-browninsh h-24'>
      mk

      </footer>
      
      
    </>
  );
}

export default NavbarComponent;
