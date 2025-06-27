import React from 'react';
import '../styles/animations.css';
import './Testimonials.css';


const testimonials = [
  {
    quote: "Bhoomi Techzone helped us scale our business with amazing tech!",
    client: "Rahul Verma",
    role: "CEO, TechStart"
  },
  {
    quote: "Reliable, innovative, and always available for support.",
    client: "Sneha Kapoor",
    role: "Operations Head, GrowMore"
  },
  {
    quote: "Truly the best UI/UX we've ever had. Loved working with them.",
    client: "Aditya Singh",
    role: "Product Designer"
  },
  {
    quote: "Superb development team. Delivered on time with high quality.",
    client: "Megha Joshi",
    role: "CTO, FinWave"
  },
  {
    quote: "Highly recommend Bhoomi Techzone for any digital transformation.",
    client: "Karan Patel",
    role: "Digital Consultant"
  }
];

const Testimonials = () => (
  <section className="testimonials-section text-white text-center py-5 animate__animated animate__fadeInUp">
    <div className="container">
      <h2 className="display-5 fw-bold mb-5">What Our Clients Say</h2>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {testimonials.map((item, i) => (
            <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
              <div className="testimonial-card mx-auto p-4 shadow">
                <p className="lead fst-italic mb-4">“{item.quote}”</p>
                <h5 className="mb-0">{item.client}</h5>
                <small className="text-light">{item.role}</small>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  </section>
);

export default Testimonials;