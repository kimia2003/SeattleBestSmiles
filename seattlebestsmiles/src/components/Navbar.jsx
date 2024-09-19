import React from 'react';
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
<div className='flex justify-between items-center h-24 max-w-[2000px] mx-auto px-4 bg-navy text-white'>
  <img src='/SBSLogo.png' alt='Seattle Best Smiles Logo' className='h-12' />
  <ul className='flex space-x-4'>
    <li className='p-4'>Home</li>
    <li className='p-4'>About</li>
    <li className='p-4 flex items-center space-x-2'>
          <FaPhone className='text-green-800' />
          <span>425-363-9864</span>
        </li>
    <li className='p-4 flex-grow text-center'>Schedule Your Visit!</li>
  </ul>
</div>

  );
};

export default Navbar;