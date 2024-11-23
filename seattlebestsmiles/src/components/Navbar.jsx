import React, { useState, useRef, useEffect } from 'react'; // Added useRef and useEffect imports
import { Link } from 'react-router-dom';
import { FaPhone, FaUserCircle } from 'react-icons/fa';

//reusable component for styling
const LinkItem = ({ to, children, icon, extraClass = "" }) => (
  <li className={`p-4 flex items-center space-x-2 hover:bg-blue-700 rounded-md transition-all ${extraClass}`}>
    {icon && <FaPhone className='text-green-400' />}
    <Link to={to} className="text-white">
      {children}
    </Link>
  </li>
);

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="sticky z-50 top-0 w-full bg-gray-800">
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        {/* Logo */}
        <img src="/images/SBSlogo.png" alt="Seattle Best Smiles Logo" className="max-h-16 h-auto" />

        {/* Navigation and Profile Section */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Navigation Links */}
          <ul className='flex space-x-4'>
            <LinkItem to="/home">Home</LinkItem>

            {/* About Dropdown */}
            <li className="relative p-4 hover:bg-blue-700 rounded-md transition-all">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
                About
              </button>
              {dropdownOpen && (
                <ul ref={dropdownRef} className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
                  <li className="px-4 py-2 hover:bg-blue-500 hover:text-white">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-500 hover:text-white">
                    <Link to="/meet-the-doctor">Meet the Doctor</Link>
                  </li>
                </ul>
              )}
            </li>

            <LinkItem to="/gallery">Gallery</LinkItem>

            <LinkItem to="tel:+14253639864" icon>
              425-363-9864
            </LinkItem>
          </ul>

          {/* Profile Icon with Routing to Patient Options */}
          <Link to="/login">
            <FaUserCircle className="text-4xl cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

