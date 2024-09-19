import React from 'react';
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-900">
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        {/* Navbar Title */}
        <h1 className='text-3xl font-bold text-white'>Seattle Best Smiles</h1>

        {/* Navbar Links */}
        <ul className='flex space-x-4'>
          {/* Home Button */}
          <li className='p-4 hover:bg-blue-700 rounded-md transition-all'>
            Home
          </li>

          {/* About Button */}
          <li className='p-4 hover:bg-blue-700 rounded-md transition-all'>
            About
          </li>

          {/* Phone Number with Icon */}
          <li className='p-4 flex items-center space-x-2 hover:bg-blue-700 rounded-md transition-all'>
            <FaPhone className='text-green-400' />
            <span>425-363-9864</span>
          </li>

          {/* Schedule Visit Button */}
          <li className='p-4 bg-teal-500 hover:bg-teal-600 rounded-md transition-all'>
            Schedule Your Visit!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
