import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const ImageCarousel = () => {
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

  // Array of image URLs
  const images = [
    "https://lh3.googleusercontent.com/p/AF1QipN0LPbYHhwgszRVxL-upqu1cgjl9MC0D37YXLc4=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipP7EwdSLutLXp3s0bSbxfn6q5LCFx8gzZr7ZWwH=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipPU4hJC0HwVvAkPbLMeWvv2KmsiJ_h6U2NnqRIR=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipOUKC0ifWb4ZDxDOusYjvKqKhTl6W7vwoH9DHCG=s680-w680-h510",
  ];

  return (
    <div className="w-full overflow-hidden z-0">
      <Slider {...settings}>
        {images.map((image, index) => (
<<<<<<< HEAD
          <div key={index}>
=======
          <div key={index} className="h-full">
>>>>>>> 8ff1354e9e48f6783878e2fedc39f9851e35847e
            <img 
            src={image} 
             alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover object-center cursor-pointer pointer-events-none"/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;