import React from 'react';
import Slider from 'react-slick';
import Footer from './Footer';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const ImageCarousel = ({images = [], additionalClasses = '' }) => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  
    autoplaySpeed: 2000,  
    pauseOnHover: false,
  };

  return (
    <div className={`w-full overflow-hidden z-0 ${additionalClasses}`}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className = "flex-justify-center">
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover object-center cursor-pointer pointer-events-none"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
<Footer />
export default ImageCarousel;
