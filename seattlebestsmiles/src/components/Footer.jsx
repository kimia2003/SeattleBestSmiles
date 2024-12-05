import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Address and Office Hours Section - Centered */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-12 w-full md:w-auto">
          {/* Address */}
          <div className="text-sm">
            <p className="font-semibold">ADDRESS</p>
            <p>13131 NE 85th St. STE 201,</p>
            <p>Kirkland, WA 98033</p>
          </div>

          {/* Office Hours */}
          <div className="text-sm">
            <p className="font-semibold">OFFICE HOURS</p>
            <p>Monday – Tuesday: Closed</p>
            <p>Wednesday – Friday: 8:00AM – 5:00PM</p>
            <p>Saturday – Sunday: Closed</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end space-x-4 mt-6 md:mt-0">
          <a href="https://www.facebook.com/Seattlesbestsmiles" className="hover:text-gray-400">
            <FaFacebook size={20} />
          </a>
          <a href="https://www.youtube.com/@seattlesbestsmiles7311" className="hover:text-gray-400">
            <FaYoutube size={20} />
          </a>
          <a href="https://www.instagram.com/seattles.best.smiles/" className="hover:text-gray-400">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} SeattlesBestSmiles. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

