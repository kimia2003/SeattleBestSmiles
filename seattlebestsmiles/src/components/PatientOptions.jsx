// src/components/PatientOptions.js
import React from 'react';
import { Link } from 'react-router-dom';

const PatientOptions = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Welcome to Patient Portal</h1>
      <div className="flex space-x-8">
        {/* New Patient Option */}
        <Link to="/new-patient">
          <button className="bg-teal-500 text-white py-3 px-8 rounded-lg hover:bg-teal-600 transition-all shadow-lg">
            New Patient
          </button>
        </Link>

        {/* Returning Patient Option */}
        <Link to="/returning-patient">
          <button className="bg-teal-500 text-white py-3 px-8 rounded-lg hover:bg-teal-600 transition-all shadow-lg">
            Returning Patient
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PatientOptions;
