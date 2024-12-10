import React from 'react';
import ImageCarousel from './ImageCarousel';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const HomePage = () => {
  const navigate = useNavigate();

  // Array of image URLs
  const images = [
    "/images/Pt Dr Interactions/IMG_3952.jpg",  
    "/images/Pt Dr Interactions/IMG_3644.jpg",
    "/images/Pt Dr Interactions/IMG_3784.jpg",
    "/images/Pt Dr Interactions/IMG_3854.jpg",
  ];

  
  const WelcomeSection = () => {
    const handleScheduleVisit = () => {
      navigate('/login'); 
    };

    return (
      <section className="flex items-center justify-center py-20 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 text-white">
        <div className="text-center max-w-4xl px-6">
          <h1 className="text-5xl font-extrabold">
            Welcome to Seattle's Best Smiles
          </h1>
          <p className="mt-4 text-lg">
            Your journey to a brighter, healthier smile starts here!
          </p>
          <button
            onClick={handleScheduleVisit}
            className="mt-8 bg-white text-teal-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all"
          >
            Schedule Your Visit
          </button>
        </div>
      </section>
    );
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section with Carousel */}
      <section className="relative">
        <ImageCarousel images={images} className="h-full object-cover" />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-teal-700 bg-opacity-80 text-white py-1 px-4 rounded-full text-xs">
          Explore Our Clinic
        </div>
      </section>

      
      <WelcomeSection />

    
      <main className="bg-gradient-to-b from-teal-50 to-white text-center p-10 rounded-lg mt-10 shadow-lg max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-teal-700 uppercase">
          Dental Implants & Cosmetic Dentistry - Kirkland, WA
        </h2>
        <p className="mt-4 text-lg text-teal-600">
          Discover The Best Smiles In Kirkland, WA
        </p>
        <div className="mt-6 space-y-4">
          <p className="text-gray-700">
            A dazzling smile can be a true confidence booster, and we believe
            that everyone deserves to have one. That’s why our team at Seattle’s
            Best Smiles is dedicated to helping our patients achieve their dream
            smile. Our dental office, located in charming Kirkland, WA, utilizes
            cutting-edge technology to ensure that your treatment is hassle-free
            and convenient.
          </p>
          <p className="text-gray-700">
            If you’re interested in dental implants, we have the expertise to
            make it happen.
          </p>
          <p className="text-gray-700">
            Let us help you unlock the power of a beautiful smile that will
            leave a lasting impression on everyone you meet!
          </p>
        </div>
      </main>


          {/*Footer*/}
    <Footer/>
    </div>
  );
};

export default HomePage;
