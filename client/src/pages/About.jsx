import React from 'react';
import '../styles/animations.css';

const About = () => (
  <section className="about-section text-white text-center py-5 animate__animated animate__fadeInUp">
    <div className="container">
      <h2 className="display-5 fw-bold position-relative d-inline-block mb-4">
        About Us
        <div className="underline mx-auto mt-2"></div>
      </h2>
      <p className="lead px-md-5">
        At <strong>Bhoomi Techzone</strong>, we specialize in crafting cutting-edge IT solutions tailored to the needs of modern businesses. With a focus on innovation, scalability, and excellence, our team is dedicated to empowering your digital transformation journey.
      </p>
    </div>
  </section>
);

export default About;
