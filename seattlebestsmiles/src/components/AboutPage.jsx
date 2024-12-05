import React from 'react';
import { FaHeart, FaLightbulb, FaUserFriends } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';
import Footer from './Footer';

const About = () => 
{
  // Array of image URLs
  const aboutImages = [
    "/images/Office/DJI_0754.jpg",  
    "/images/Office/IMG_3504.jpg",
    "/images/Pt Dr Interactions/IMG_3639.jpg",
    "/images/Pt Dr Interactions/IMG_3799.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">

      <header className="w-full h-40 bg-gradient-to-b from-blue-900 to-blue-700 text-white flex items-center justify-center shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-wider">About Us</h1>
      </header>

      <section className="w-full">
        <ImageCarousel images={aboutImages} />
      </section>

    

      <div className="max-w-6xl mx-auto p-12 mt-12 bg-white shadow-2xl rounded-xl space-y-8">
        <h2 className="text-4xl font-semibold text-center text-blue-900 mb-8">Welcome to Seattle's Best Smiles</h2>
        <p className="text-xl text-gray-700 leading-relaxed text-center mb-8 px-8">
          At <span className="font-bold text-blue-600">Seattle’s Best Smiles</span>, we are committed to providing top-quality dental care in the greater Kirkland, WA area. Our team consists of highly skilled and compassionate professionals who prioritize your comfort and health.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed text-center mb-8 px-8">
          We offer a wide range of services, from preventive care to advanced cosmetic and restorative treatments. Our clinic is equipped with cutting-edge technology, including sedation options and advanced imaging, to make your visit as comfortable as possible.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed text-center px-8">
          Whether you're here for a routine check-up or a complete smile makeover, we’re here to help you achieve the smile you deserve.
        </p>
      </div>

{ /*core values section */ }
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 w-full py-16 mt-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h3 className="text-4xl font-semibold text-blue-900 mb-12">Our Core Values</h3>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center text-center">
              <FaHeart className="text-5xl text-blue-600 mb-4" />
              <h4 className="text-2xl font-semibold text-blue-700 mb-4">Compassionate Care</h4>
              <p className="text-gray-600">
                We treat each patient with empathy, respect, and understanding, creating a welcoming environment for all.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center text-center">
              <FaLightbulb className="text-5xl text-blue-600 mb-4" />
              <h4 className="text-2xl font-semibold text-blue-700 mb-4">Innovation</h4>
              <p className="text-gray-600">
                Our practice embraces the latest advancements in dental and cosmetic technology to provide precise, effective, and minimally invasive treatments.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center text-center">
              <FaUserFriends className="text-5xl text-blue-600 mb-4" />
              <h4 className="text-2xl font-semibold text-blue-700 mb-4">Patient-Centered Approach</h4>
              <p className="text-gray-600">
                We prioritize our patients’ needs, building personalized treatment plans and fostering long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 mt-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h3 className="text-4xl font-semibold text-blue-900 mb-12">Our Services</h3>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <h4 className="text-2xl font-semibold text-blue-700 mb-4">Restorative Dentistry</h4>
              <p className="text-gray-600">
              Restore the function and appearance of your teeth dental implants.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <h4 className="text-2xl font-semibold text-blue-700 mb-4">Cosmetic Dentistry</h4>
              <p className="text-gray-600">
                Enhance your smile with treatments like teeth whitening, veneers, and aesthetic contouring.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <h4 className="text-2xl font-semibold text-blue-700 mb-4">Facial Aesthetics</h4>
              <p className="text-gray-600">
              Enhance your appearance with services like Botox, dermal fillers, and PDO threads, all administered with precision and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default About;
