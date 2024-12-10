import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaUserCircle } from 'react-icons/fa';

// Reusable component for styling
const LinkItem = ({ to, children, icon, extraClass = "" }) => (
  <li
    className={`px-4 py-2 flex items-center space-x-2 hover:bg-teal-600 rounded-lg transition-all ${extraClass}`}
  >
    {icon && <FaPhone className="text-green-400" />}
    <Link to={to} className="text-white">
      {children}
    </Link>
  </li>
);

const Navbar = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
  return (
    <div className="sticky z-50 top-0 w-full bg-gradient-to-r from-teal-600 to-blue-800">
      <div className="flex justify-between items-center h-auto max-w-screen-xl mx-auto px-6 py-2 text-white">
        {/* Logo */}
        <div>
          <img
            src="/images/SBSlogo.png"
            alt="Seattle Best Smiles Logo"
            className="h-12 md:h-16 cursor-pointer"
          />
        </div>

        {/* Navigation Links and Profile Section */}
        <div className ="relative">
        <div className="flex items-center space-x-6">
      
        <ul className="hidden md:flex flex-wrap items-center space-x-6">
            <LinkItem to="/home">Home</LinkItem>
            {/* About Dropdown with Hover */}
            <li
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button className="px-4 py-2 flex items-center space-x-2 hover:bg-teal-600 rounded-lg transition-all duration-200">
                <span className="text-white">About</span>
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                    isAboutOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <ul
                className={`
          absolute left-0 mt-1 w-48 bg-white rounded-lg shadow-xl
          transition-all duration-200 origin-top
          ${
            isAboutOpen
              ? "opacity-100 visible transform translate-y-0"
              : "opacity-0 invisible transform -translate-y-2"
          }
        `}
              >
                <li>
                  <a
                    href="/about"
                    className="block px-4 py-3 text-gray-700 hover:bg-teal-600 hover:text-white rounded-t-lg transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/meet-the-doctor"
                    className="block px-4 py-3 text-gray-700 hover:bg-teal-600 hover:text-white rounded-b-lg transition-colors"
                  >
                    Meet the Doctor
                  </a>
                </li>
              </ul>
            </li>
            <LinkItem to="/gallery">Gallery</LinkItem>
            <LinkItem to="tel:+14253639864" icon>
              425-363-9864
            </LinkItem>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl focus:outline-none hover:text-teal-400 p-2">
          
              ☰
            </button>
          </div>

{/* Profile Section */}
<Link to="/login" className="flex items-center space-x-2">
              <FaUserCircle className="text-3xl hover:text-teal-400 transition-all" />
              <span className="hidden md:inline-block text-white font-medium">
                Account
              </span>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute top-full -right-4 w-64 bg-white shadow-lg rounded-b-lg transition-all duration-300 transform${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0 pointer-events-none"
            }`}
          >
            <ul className="py-2">
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link
                  to="/home"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="w-full px-4 py-2 text-left text-gray-700 hover:bg-teal-600 hover:text-white flex items-center justify-between"
                >
                  About
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      isAboutOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <ul
                  className={`bg-gray-50 transition-all duration-200 ${
                    isAboutOpen ? "block" : "hidden"
                  }`}
                >
                  <li onClick={() => setIsMobileMenuOpen(false)}>
                    <Link
                      to="/about"
                      className="block px-8 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>
                  <li onClick={() => setIsMobileMenuOpen(false)}>
                    <Link
                      to="/meet-the-doctor"
                      className="block px-8 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
                    >
                      Meet the Doctor
                    </Link>
                  </li>
                </ul>
              </li>
              <li onClick={() => setIsMobileMenuOpen(false)}>
                <Link
                  to="/gallery"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="tel:+14253639864"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-600 hover:text-white"
                >
                  425-363-9864
                </Link>
              </li>
            </ul>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Navbar;


