import React from 'react';
import ImageCarousel from './ImageCarousel';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  
  const WelcomeSection = () => {
    const handleScheduleVisit = () => {
      navigate('/login'); 
    };

    return (
      <section className="flex items-center justify-center py-26 px-4 bg-gray-50">
        <div className="text-center max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Seattle's Best Smiles</h1>
          <p className="mt-4 text-lg text-gray-600">Your journey to a brighter, healthier smile starts here!</p>
          <button
            onClick={handleScheduleVisit}
            className="mt-8 bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600"
          >
            Schedule Your Visit
          </button>
        </div>
      </section>
    );
  };

  return (
    <div className="bg-white min-h-screen text-gray-800">
      
      <section className="hero">
        <ImageCarousel />
      </section>

      
      <WelcomeSection />

    
      <main className="bg-gray-50 text-center p-8 rounded-lg mt-8 shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 uppercase">Dental Implants & Cosmetic Dentistry - Kirkland, WA</h2>
        <p className="mt-4 text-gray-600 text-lg">Discover The Best Smiles In Kirkland, WA</p>
        <p className="mt-6 text-gray-600">
          A dazzling smile can be a true confidence booster, and we believe that everyone deserves to have one. 
          That’s why our team at Seattle’s Best Smiles is dedicated to helping our patients achieve their dream smile. 
          Our dental office, located in charming Kirkland, WA, utilizes cutting-edge technology to ensure that your treatment is hassle-free and convenient.
        </p>
        <p className="mt-4 text-gray-600">
          Whether you’re interested in <span className="font-semibold text-blue-900">dental implants</span>, which can revolutionize your smile, or <span className="font-semibold text-blue-900">zirconia fixed bridges</span>, we have the expertise to make it happen.
        </p>
        <p className="mt-4 text-gray-600">
          Let us help you unlock the power of a beautiful smile that will leave a lasting impression on everyone you meet!
        </p>
      </main>

      
      <footer className="bg-gray-800 text-white text-center py-6 mt-8">
        <p>© 2024 Seattle's Best Smiles. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
