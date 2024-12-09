import React from 'react';


const MeetTheDoctor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
    
    {/* Header Section */}
    <header className="w-full h-24 bg-gradient-to-r from-teal-600 to-blue-800 text-white flex items-center justify-center shadow-lg">
        <h1 className="text-3xl font-bold">Meet Dr. Arkadi Razoumovitch</h1>
      </header>

      {/*intro section*/}
      <div className="flex flex-col lg:flex-row max-w-5xl mx-auto p-8 mt-8 bg-white shadow-md rounded-xl overflow-hidden">
        <div className="flex-shrink-0 flex justify-center">
          <img
            src="/images/Dr Portraits/Razoumovitch, Arkadi/IMG_3680.jpg"
            alt="Dr. Arkadi Razoumovitch"
            className="w-64 h-auto rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4 text-left mt-6 lg:mt-0 lg:ml-6">
          <h2 className="text-2xl font-semibold text-teal-700">
            Arkadi Razoumovitch, DDS
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dr. Razoumovitch is dedicated to transforming smiles using the
            latest advancements in dental technology, including 3D cone beam
            scanning and zirconia prosthetics.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With expertise in surgical and cosmetic procedures, he provides
            specialized care in bone grafting, implant placement, and facial
            aesthetics such as Botox and dermal fillers. He holds mastership
            status with the American Academy of Facial Esthetics.
          </p>
        </div>
      </div>

      {/*why us*/}
      <section className="py-12 bg-gradient-to-r from-white to-teal-50">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-teal-700 mb-8">
            Why Choose Dr. Razoumovitch?
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105">
              <h4 className="text-lg font-semibold text-teal-700 mb-2">
                Personalized Care
              </h4>
              <p className="text-gray-600 text-sm">
                Dr. Razoumovitch tailors every treatment plan to your unique
                needs, ensuring personalized care at every visit.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105">
              <h4 className="text-lg font-semibold text-teal-700 mb-2">
                Advanced Technology
              </h4>
              <p className="text-gray-600 text-sm">
                State-of-the-art technology ensures precision and comfort with
                minimally invasive methods.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105">
              <h4 className="text-lg font-semibold text-teal-700 mb-2">
                Comforting Experience
              </h4>
              <p className="text-gray-600 text-sm">
                A calm, welcoming environment focused on your comfort and
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*DR Affiliations*/}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-teal-700 mb-8">
            Professional Affiliations
          </h3>
          <ul className="grid gap-4 lg:grid-cols-2 text-left text-gray-700 text-sm">
            <li className="p-4 bg-teal-50 rounded-lg shadow-sm hover:shadow-md transition">
              American Dental Association (ADA)
            </li>
            <li className="p-4 bg-teal-50 rounded-lg shadow-sm hover:shadow-md transition">
              Academy of General Dentistry (AGD)
            </li>
            <li className="p-4 bg-teal-50 rounded-lg shadow-sm hover:shadow-md transition">
              American Academy of Implant Dentistry (AAID)
            </li>
            <li className="p-4 bg-teal-50 rounded-lg shadow-sm hover:shadow-md transition">
              American Academy of Cosmetic Dentistry (AACD)
            </li>
            <li className="p-4 bg-teal-50 rounded-lg shadow-sm hover:shadow-md transition">
              American Academy of Facial Esthetics (AAFE)
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MeetTheDoctor;
