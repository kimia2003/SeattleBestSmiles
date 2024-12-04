import React from 'react';
import ImageCarousel from './ImageCarousel';

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
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
   
   {/* header*/ }
      <header className="w-full h-40 bg-gradient-to-b from-blue-900 to-blue-700 text-white flex items-center justify-center shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-wider">Gallery</h1>
      </header>

      {/*slideshow */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-semibold text-blue-900 text-center mb-12">
            Before & After Transformations
          </h2>
          <div className = "relative">
          <ImageCarousel images = {BeforeandAfters} 
          />
          </div>
          </div>
          </section>


        {/*testimonials*/}
        <section className = "w-full py-16 bg-gradient-to-r from-blue-50 to-teal-50"> 
        <div className = "max-w-6xl mx-auto px-8"> <h2 className = "text-4xl font-semibold text-blue-900 text-center mb-12"> Patient Video Testimonials 
        </h2> <div className="grid gap-12 md:grid-cols-2"> {videoTestimonials.map((videoUrl, index) => 
        ( <div key={index} className="relative aspect-w-16 aspect-h-9 rounded-lg shadow-lg"> 
        <iframe className="rounded-lg" src={videoUrl} 
        title={`Patient Testimonial ${index + 1}`}
         frameBorder="0"
          allow="accelerometer; 
          autoplay; 
          clipboard-write;
           encrypted-media; 
           gyroscope; 
           picture-in-picture" 
           allowFullScreen 
           ></iframe> 
           </div> 
           ))} 
           </div> 
           </div> 
           </section>


{/*Dr*/}
<section className="w-full py-16 mt-12 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-semibold text-blue-900 mb-12">Hear From Dr. Razoumovitch</h2>
          <div className="grid gap-12 md:grid-cols-2">
            {drVideos.map((videoUrl, index) => (
              <div key={index} className="relative aspect-w-16 aspect-h-9 rounded-lg shadow-lg">
                <iframe
                  className="rounded-lg"
                  src={videoUrl}
                  title={`Dr. Razoumovitch Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;