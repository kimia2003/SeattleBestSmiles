import React from 'react';
import ImageCarousel from './ImageCarousel';

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      {/* Carousel Section */}
      <section className="hero">
        <ImageCarousel />
      </section>

      {/* Welcome Section */}
      <section className="hero bg-blue-50 flex items-center justify-center py-16">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl font-bold text-blue-900">Welcome to Seattle's Best Smiles</h1>
          <p className="mt-4 text-lg">Your journey to a brighter, healthier smile starts here!</p>
          <button className="mt-8 bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600">
            Schedule Your Visit
          </button>
        </div>
      </section>

      {/* Main Info Section */}
      <main className="bg-teal-100 text-center p-8 rounded-lg mt-8 shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-950 uppercase">Dental Implants & Cosmetic Dentistry - Kirkland, WA</h2>
        <p className="mt-4 text-blue-950 text-lg">Discover The Best Smiles In Kirkland, WA</p>
        <p className="mt-6 text-blue-950">
          A dazzling smile can be a true confidence booster, and we believe that everyone deserves to have one. 
          That’s why our team at Seattle’s Best Smiles is dedicated to helping our patients achieve their dream smile. 
          Our dental office, located in charming Kirkland, WA, utilizes cutting-edge technology to ensure that your treatment is hassle-free and convenient.
        </p>
        <p className="mt-4 text-blue-950">
          Whether you’re interested in <span className="font-semibold text-blue-900">dental implants</span>, which can revolutionize your smile, or <span className="font-semibold text-blue-900">zirconia fixed bridges</span>, we have the expertise to make it happen.
        </p>
        <p className="mt-4 text-blue-950">
          Let us help you unlock the power of a beautiful smile that will leave a lasting impression on everyone you meet!
        </p>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6 mt-8">
        <p>© 2024 Seattle's Best Smiles. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
