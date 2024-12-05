import React from 'react';
import Footer from './Footer';

const MeetTheDoctor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      
      <header className="w-full h-40 bg-gradient-to-b from-blue-900 to-blue-700 text-white flex items-center justify-center shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-wider">Meet Dr. Arkadi Razoumovitch</h1>
      </header>

      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto p-12 mt-12 bg-white shadow-2xl rounded-xl overflow-hidden space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="flex-grow flex justify-center">
        <img 
          src="/images/Dr Portraits/Razoumovitch, Arkadi/IMG_3680.jpg"
          alt="Dr. Arkadi Razoumovitch"
          className="w-full h-auto max-w-[500px]rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        />
        </div>

        <div className="flex flex-col justify-center space-y-6 text-left">
          <h2 className="text-3xl font-semibold text-blue-900">Arkadi Razoumovitch, DDS</h2>
          <p className="text-gray-700 leading-relaxed">
            Dr. Razoumovitch is dedicated to transforming smiles using the latest advancements in dental technology. His practice incorporates cutting-edge tools like 3D cone beam scanning and 3D-milled zirconia prosthetics.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With advanced training in surgical and cosmetic procedures, Dr. Razoumovitch provides specialized care in bone grafting, implant placement, and facial esthetics, including botox and dermal fillers. He holds mastership status with the American Academy of Facial Esthetics.
          </p>
        </div>
      </div>

      <section className="w-full py-16 mt-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h3 className="text-4xl font-semibold text-blue-900 mb-12">Why Choose Dr. Razoumovitch?</h3>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <h4 className="text-2xl font-semibold text-blue-800 mb-4">Personalized Care</h4>
              <p className="text-gray-600">
                Dr. Razoumovitch tailors treatment plans to each patient’s needs, making every visit unique and focused on individual goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <h4 className="text-2xl font-semibold text-blue-800 mb-4">Advanced Technology</h4>
              <p className="text-gray-600">
                Using state-of-the-art dental technology, Dr. Razoumovitch enhances precision and patient experience with modern, minimally invasive methods.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <h4 className="text-2xl font-semibold text-blue-800 mb-4">Comforting Experience</h4>
              <p className="text-gray-600">
                Known for his compassionate approach, Dr. Razoumovitch ensures a calm, welcoming environment where patient comfort is a top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white w-full py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h3 className="text-4xl font-semibold text-blue-900 mb-10">Professional Affiliations</h3>
          <ul className="grid gap-6 text-left mx-6 lg:mx-auto lg:grid-cols-2 text-gray-700 text-lg">
            <li className="p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-all">American Dental Association (ADA)</li>
            <li className="p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-all">Academy of General Dentistry (AGD)</li>
            <li className="p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-all">American Academy of Implant Dentistry (AAID)</li>
            <li className="p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-all">American Academy of Cosmetic Dentistry (AACD)</li>
            <li className="p-4 rounded-lg bg-blue-50 shadow-md hover:bg-blue-100 transition-all">American Academy of Facial Esthetics (AAFE)</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MeetTheDoctor;
