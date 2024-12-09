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

  {/*Header*/}
  return (
    <div className="bg-gradient-to-b from-white to-teal-50">
      <header className="w-full h-24 bg-gradient-to-r from-teal-600 to-blue-800 text-white flex items-center justify-center shadow-lg">
  <h1 className="text-3xl font-bold tracking-wide">About Us</h1>
</header>

    {/*Image Carousel*/}
      <section className="w-full">
        <ImageCarousel images={aboutImages} />
      </section>

    
      {/*Welcome Section*/}
      <div className="max-w-5xl mx-auto p-8 mt-8 bg-white shadow-lg rounded-lg space-y-6">
        <h2 className="text-2xl font-bold text-center text-teal-700">
          Welcome to Seattle's Best Smiles
        </h2>
        <p className="text-base text-gray-700 leading-relaxed text-center px-8">
          At{" "}
          <span className="font-bold text-teal-500">Seattle’s Best Smiles</span>
          , we provide top-quality dental care in Kirkland, WA. Our skilled team
          offers preventive, cosmetic, and restorative treatments to help you
          achieve your dream smile in a comfortable and modern clinic.
        </p>
      </div>

{ /*core values section */ }
       <section className="bg-gradient-to-r from-white to-teal-100 py-12 mt-8">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-teal-700 mb-8">
            Our Core Values
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <FaHeart className="text-4xl text-teal-500 mb-4" />
              <h4 className="text-lg font-semibold text-teal-700">
                Compassionate Care
              </h4>
              <p className="text-sm text-gray-600">
                Empathy and respect are at the heart of every patient
                interaction.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <FaLightbulb className="text-4xl text-teal-500 mb-4" />
              <h4 className="text-lg font-semibold text-teal-700">
                Innovation
              </h4>
              <p className="text-sm text-gray-600">
                We utilize advanced dental technologies for precise and
                effective treatments.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <FaUserFriends className="text-4xl text-teal-500 mb-4" />
              <h4 className="text-lg font-semibold text-teal-700">
                Patient-Centered
              </h4>
              <p className="text-sm text-gray-600">
                Personalized plans to meet your unique needs and build long-term
                trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Services Section*/}
      <section className="py-12 bg-gradient-to-r from-teal-50 to-teal-100">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-teal-700 mb-8">
            Our Services
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <h4 className="text-lg font-semibold text-teal-700 mb-2">
                Restorative Dentistry
              </h4>
              <p className="text-sm text-gray-600">
                Restore your smile with implants and advanced dental care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <h4 className="text-lg font-semibold text-teal-700 mb-2">
                Cosmetic Dentistry
              </h4>
              <p className="text-sm text-gray-600">
                Enhance your smile with whitening, veneers, and more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <h4 className="text-lg font-semibold text-teal-700 mb-2">
                Facial Aesthetics
              </h4>
              <p className="text-sm text-gray-600">
                Boost your confidence with Botox and facial treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* Footer */}
      <footer className="bg-teal-700 text-white text-center py-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-teal-100 mb-2">
            13131 NE 85th ST, Ste 201, Kirkland, WA 98033
          </p>
          <p className="text-sm text-teal-100">
            © 2024 Seattle’s Best Smiles. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default About;
