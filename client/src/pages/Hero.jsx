import React from 'react';
import '../styles/animations.css';

const Hero = () => (
  <section className="hero-section text-white text-center py-5 animate__animated animate__fadeIn">
    <div className="container py-5">
      <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">Bhoomi Techzone Pvt Ltd</h1>
      <p className="lead fs-4 animate__animated animate__fadeInUp">Most Responsive & Innovative IT Solutions for Businesses</p>
      <a href="#contact" className="btn btn-outline-light btn-lg mt-4 px-5 py-2 animate__animated animate__fadeInUp">Contact Us</a>
    </div>
  </section>
);

export default Hero;
