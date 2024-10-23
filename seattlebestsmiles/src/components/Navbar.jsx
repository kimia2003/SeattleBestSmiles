import React, { useState } from 'react'; // Added useState import
import { Link } from 'react-router-dom';
import { FaPhone, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // useState is now properly imported

  return (
    <div className="sticky z-50 top-0 w-full bg-blue-900">
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        {/* Logo */}
        <img src="/SBSlogo.png" alt="Seattle Best Smiles Logo" className="max-h-16 h-auto" />

        {/* Navigation and Profile Section */}
        <div className="flex items-center space-x-4 ml-auto">
          {/* Navigation Links */}
          <ul className='flex space-x-4'>
            <li className='p-4 hover:bg-blue-700 rounded-md transition-all'>
              <Link to="/home">Home</Link>
            </li>

            {/* About Dropdown */}
            <li className="relative p-4 hover:bg-blue-700 rounded-md transition-all">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
                About
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
                  <li className="px-4 py-2 hover:bg-blue-500 hover:text-white">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-500 hover:text-white">
                    <Link to="/meet-the-doctor">Meet the Doctor</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className='p-4 flex items-center space-x-2 hover:bg-blue-700 rounded-md transition-all'>
              <FaPhone className='text-green-400' />
              <span>425-363-9864</span>
            </li>
          </ul>

          {/* Profile Icon with Routing to Patient Options */}
          <Link to="/patient-options">
            <FaUserCircle className="text-4xl cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
