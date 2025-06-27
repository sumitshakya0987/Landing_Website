import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import '../styles/animations.css';
import './TechStack.css';

const techs = [html, css, js, react, node,react];

const TechStack = () => (
  <section className="techstack-section text-white text-center py-5 animate__animated animate__fadeInUp">
    <div className="container">
      <h2 className="display-5 fw-bold mb-5">Our Tech Stack</h2>
      <div className="row justify-content-center align-items-center">
        {techs.map((img, i) => (
          <div key={i} className="col-4 col-md-2 mb-4">
            <div className="tech-logo">
              <img src={img} className="img-fluid" alt="tech" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
