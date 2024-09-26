import React from 'react';
import ImageCarousel from './ImageCarousel';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Carousel Section */}
      <ImageCarousel />
      <main className="bg-teal-100 text-center p-8 rounded-lg mt-8 shadow-lg max-w-4xl">
        <h2 className="text-2xl font-semibold text-blue-950 uppercase">
          Dental Implants & Cosmetic Dentistry - Kirkland, WA
        </h2>
        <p className="mt-4 text-blue-950 text-lg">Discover The Best Smiles In Kirkland, WA</p>
        <p className="mt-6 text-blue-950">
          A dazzling smile can be a true confidence booster, and we believe that everyone deserves to have one. 
          That’s why our team at Seattle’s Best Smiles is dedicated to helping our patients achieve their dream smile. 
          Our dental office, located in charming Kirkland, WA, utilizes cutting-edge technology to ensure that your treatment is hassle-free and convenient.
        </p>
        <p className="mt-4 text-blue-950">
          Whether you’re interested in <span className="font-semibold text-blue-900">dental implants</span>, which can revolutionize your smile, or <span className="font-semibold text-blue-900">zirconia fixed bridges</span> which can restore the function and beauty of your teeth, we have the expertise and the tools to make it happen.
        </p>
        <p className="mt-4 text-blue-950">
          Let us help you unlock the power of a beautiful smile that will leave a lasting impression on everyone you meet!
        </p>
    
        <button className="bg-teal-500 text-white py-3 px-8 rounded-lg mt-8 shadow-lg">
          Schedule Your Visit
        </button>
      </main>
    </div>
  );
};

export default HomePage;
