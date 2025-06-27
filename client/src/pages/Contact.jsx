import React, { useState } from 'react';
import '../styles/animations.css';
import './contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert("Message submitted successfully!");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section py-5 text-white bg-dark" id="contact">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold animate__animated animate__fadeInUp">Contact Us</h2>
        <p className="text-center text-light mb-5">Have a question or want to work with us? Let’s talk!</p>

        <form className="col-md-8 col-lg-6 mx-auto animate__animated animate__fadeInUp" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text bg-primary text-white"><i className="bi bi-person"></i></span>
            <input type="text" className="form-control" name="name" value={form.name} placeholder="Your Name" onChange={handleChange} required />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text bg-primary text-white"><i className="bi bi-envelope"></i></span>
            <input type="email" className="form-control" name="email" value={form.email} placeholder="Your Email" onChange={handleChange} required />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text bg-primary text-white"><i className="bi bi-chat-dots"></i></span>
            <textarea className="form-control" name="message" rows="4" value={form.message} placeholder="Your Message" onChange={handleChange} required></textarea>
          </div>

          <div className="d-grid">
            <button className="btn btn-primary btn-lg" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
