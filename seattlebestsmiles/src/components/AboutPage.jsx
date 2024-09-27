import React from 'react';
const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <div className="max-w-5xl mx-auto p-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-8">About Us</h1>
        <p className="text-xl text-gray-600 leading-relaxed text-center mb-6">
          Welcome to <span className="font-bold text-blue-500">Seattle’s Best Smiles</span>, where we strive to create the best smiles in the greater Kirkland, WA area. Our dental office houses some of the best dentists who are dedicated to providing personalized, compassionate care in a friendly and inviting environment.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed text-center mb-6">
          We understand that going to the dentist can be nerve-wracking, but with our wide range of sedation options, advanced dental technology, and relaxing amenities, we ensure your visit will be comfortable and stress-free.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed text-center mb-6">
          As a multi-specialty dental office, we provide a variety of treatment options under one roof. From routine checkups to more complex treatments like dental implants, we’re committed to helping you achieve a healthy and beautiful smile.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed text-center">
          If you’re in the Kirkland, WA area and looking for a dentist near you, you’ve come to the right place. We can’t wait to meet you and help you achieve the smile you deserve!
        </p>
      </div>
    </div>
  );
};

export default About;
