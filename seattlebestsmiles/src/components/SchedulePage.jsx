import React from 'react';
import { Link } from 'react-router-dom';

const SchedulePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Schedule Your Appointment</h1>
      
      {/* Flexbox container for the buttons */}
      <div className="flex space-x-8 mt-6 w-full max-w-lg">
        {/* Returning Patient Button */}
        <Link to="/returning-patient" className="w-full">
          <button className="w-full bg-teal-500 text-white py-3 px-8 rounded-lg hover:bg-teal-600 transition-all shadow-lg">
            Returning Patient
          </button>
        </Link>

        {/* New Patient Button */}
        <Link to="/new-patient" className="w-full">
          <button className="w-full bg-teal-500 text-white py-3 px-8 rounded-lg hover:bg-teal-600 transition-all shadow-lg">
            New Patient
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SchedulePage;
