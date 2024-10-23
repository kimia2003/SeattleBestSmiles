import React, { useState } from 'react';

const NewPatient = () => {
  const [patientID, setPatientID] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!patientID || !dob) {
      alert("Please fill out both fields.");
      return;
    }

    // Submit logic or API request can go here
    console.log("Searching for account:", { patientID, dob });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Find Your Account</h1>
      <form className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full" onSubmit={handleSubmit}>
        {/* Patient ID Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientID">
            Patient ID
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="patientID"
            type="text"
            value={patientID}
            onChange={(e) => setPatientID(e.target.value)}
            placeholder="Enter your Patient ID"
          />
        </div>

        {/* Date of Birth (DOB) Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Search Account
        </button>
      </form>
    </div>
  );
};

export default NewPatient;
