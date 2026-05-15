import React from "react";
import hands from "../../assets/Images/ban5.png";
import photo from  "../../assets/Images/ban4.png"
import nava from "../../assets/Images/ban1.png"
import "../../assets/Style/Banner.css";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  const slides = [
    {
      image: hands,
    },
    {
      image: photo,
    },
    {
      image: nava,
    },
  ];

  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index} className="banner-item">
          <img
            className="d-block w-100 banner-image"
            src={slide.image}
            alt={`Slide ${index + 1}`}
          />

          <div className="banner-overlay"></div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
 
 
 
 // <Carousel>
    //   {slides.map((slide, index) => (
    //     <Carousel.Item key={index} className="banner-item">
    //       <img
    //         className="d-block w-100 banner-image"
    //         src={slide.image}
    //         alt={`Slide ${index + 1}`}
    //       />

    //       <div className="banner-overlay"></div>

    //       <Carousel.Caption className="banner-caption">
       
    //         <h1 className="heading-overlay display-5 display-md-4 display-lg-3">
    //           {slide.heading}
    //         </h1>
    //         <p className="lead d-none d-md-block">{slide.text}</p>
    //         <p className="d-md-none small">{slide.text}</p>

    //         <div className="py-3 py-md-4">
    //           <Link to="/wedding" className="faq-button text-decoration-none btn-lg">
    //             Find Out More
    //           </Link>
    //         </div>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>


