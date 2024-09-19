import React from 'react';
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
<div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-blue-950'>
  <h1 className='text-3xl font-bold text-blue-950'>Seattle Best Smiles</h1>
  <ul className='flex space-x-4'>
    <li className='p-4'>Home</li>
    <li className='p-4'>About</li>
    <li className='p-4 flex items-center space-x-2'>
          <FaPhone className='text-green-800' />
          <span>425-363-9864</span>
        </li>
    <li className='p-4 flex-grow text-center'>Schedule Your Visit</li>
  </ul>
</div>

  );
};

export default Navbar;