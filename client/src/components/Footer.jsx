import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} Bhoomi Techzone PVT LTD. All rights reserved.</p>
      <div>
        <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
        <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
        <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
  </footer>
);

export default Footer;
