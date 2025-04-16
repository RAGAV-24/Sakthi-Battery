import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import logo1 from '../assets/img1.jpg';
import logo2 from '../assets/img2.jpg';
import logo3 from '../assets/img3.jpg';

const Carosel = () => {
  return (
    <div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={logo1} className="d-block w-100" alt="Slide 1" />
    </div>
    <div className="carousel-item">
      <img src={logo2} className="d-block w-100" alt="Slide 2" />
    </div>
    <div className="carousel-item">
      <img src={logo3} className="d-block w-100" alt="Slide 3" />
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  );
};

export default Carosel;
