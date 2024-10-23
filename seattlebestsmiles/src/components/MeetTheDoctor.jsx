import React from 'react';

const MeetTheDoctor = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Meet Dr. Arkadi Razoumovitch</h1>
      
      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg flex items-center space-x-8">
        {/* Doctor's Image */}
        <img 
          src="/path-to-doctor-image.jpg"  // Replace with the actual image path
          alt="Dr. Arkadi Razoumovitch"
          className="w-48 h-auto rounded-lg shadow-md"
        />
        
        {/* Doctor's Information */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-blue-800">Arkadi Razoumovitch, DDS</h2>
          <p className="mt-4 text-gray-700">
            Dr. Razoumovitch embraces the latest technology, including 3D cone beam scanning and 3D-milled zirconia prosthetics on implants. 
            He has extensive post-graduate training in surgical procedures like bone grafting, implant placement, and All-on-4, as well as cosmetic dentistry and facial esthetics such as botox, dermal and lip fillers, and PDO threads. 
            He has achieved mastership status with the American Academy of Facial Esthetics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MeetTheDoctor;
