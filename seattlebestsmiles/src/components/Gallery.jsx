import React from 'react';
import ImageCarousel from './ImageCarousel';
import Footer from './Footer';

const Gallery = () => {
    //before and after
const BeforeandAfters = [
    '/images/BeforeandAfters/BA1.jpg',
    '/images/BeforeandAfters/BA2.jpg',
    '/images/BeforeandAfters/BA3.jpg',
    '/images/BeforeandAfters/BA4.jpg',


]


//patient testimonial
const videoTestimonials = [
    "https://www.youtube.com/embed/91-LpwwfMb8",
    "https://www.youtube.com/embed/4f4S-iv2LGY",
    "https://www.youtube.com/embed/--3MEdfnHQc",
    "https://www.youtube.com/embed/CohDlyVXONQ",


];

//videos from Dr.R
const drVideos = 
[
    "https://www.youtube.com/embed/sX9by-UYJgk",
    "https://www.youtube.com/embed/wUzGEjsAMBI",
    "https://www.youtube.com/embed/vt6A10No-9M",
    "https://www.youtube.com/embed/8on4gNszejc",



]

return (

  <div className="bg-gradient-to-b from-white to-teal-50">
  {/* Header */}
  <header className="w-full h-24 bg-gradient-to-r from-teal-600 to-blue-800 text-white flex items-center justify-center shadow-lg">
      <h1 className="text-3xl font-bold tracking-wide">Gallery</h1>
  </header>

      {/*slideshow */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-2xl font-bold text-teal-700 text-center mb-8">
            Before & After Transformations
          </h2>
          <div className = "relative">
          <ImageCarousel images = {BeforeandAfters} 
          />
          </div>
          </div>
          </section>


        {/*testimonials*/}
        <section className="w-full py-12 bg-gradient-to-r from-teal-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-teal-700 text-center mb-8">
            Patient Video Testimonials
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {videoTestimonials.map((videoUrl, index) => (
              <div key={index} className="w-full">
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                    src={videoUrl}
                    title={`Patient Testimonial ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{/*Dr*/}
<section className="w-full py-12 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-teal-700 text-center mb-8">
            Hear From Dr. Razoumovitch
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {drVideos.map((videoUrl, index) => (
              <div key={index} className="w-full">
                <div className="relative w-full pt-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
                    src={videoUrl}
                    title={`Dr. Razoumovitch Video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    
    {/*Footer*/}
    <Footer/>
    </div>
     
 

  );
};

export default Gallery;