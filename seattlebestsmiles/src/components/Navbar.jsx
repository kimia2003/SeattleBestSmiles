import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="sticky z-50 top-0 w-full bg-blue-900">
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <img src="/SBSlogo.png" alt="Seattle Best Smiles Logo" className="max-h-16 h-auto" />

       
        <ul className='flex space-x-4'>
          <li className='p-4 hover:bg-blue-700 rounded-md transition-all'>
            <Link to="/home">Home</Link> {}
        
          </li>
          
          <li className='p-4 hover:bg-blue-700 rounded-md transition-all'>
            <Link to="/about">About</Link> {/* Link to AboutPage */}
          </li>

        
          <li className='p-4 flex items-center space-x-2 hover:bg-blue-700 rounded-md transition-all'>
            <FaPhone className='text-green-400' />
            <span>425-363-9864</span>
          </li>

         
          <li className='p-4 bg-teal-500 hover:bg-teal-600 transition-all'>
            Schedule Your Visit!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
