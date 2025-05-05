import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo1 from '../assets/img1.jpg';
import logo2 from '../assets/img2.jpg';
import logo3 from '../assets/img3.jpg';

const Carosel = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img   style={{ height: '442px',width:"1400px", objectFit: 'cover' }} src={logo1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{ height: '442px',width:"1400px", objectFit: 'cover' }} src={logo2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img  style={{ height: '442px',width:"1400px", objectFit: 'cover' }} src={logo3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carosel;
