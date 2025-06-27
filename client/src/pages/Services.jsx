import React, { useState } from 'react';
import '../styles/animations.css';
import './services.css'; // Import custom styles

const services = [
  {
    title: 'Web Development',
    icon: 'bi-code-slash',
    desc: 'Modern, scalable, and fast websites.',
    tools: ['HTML5', 'CSS3', 'React.js', 'Node.js'],
  },
  
  {
    title: 'Mobile Apps',
    icon: 'bi-phone',
    desc: 'Responsive and high-performance apps.',
    tools: ['Flutter', 'React Native', 'Android Studio'],
  },
  {
    title: 'UI/UX Design',
    icon: 'bi-palette',
    desc: 'User-friendly and beautiful designs.',
    tools: ['Figma', 'Adobe XD', 'Sketch'],
  },
];

const Services = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="services-section text-white text-center py-5 animate__animated animate__fadeInUp">
      <div className="container">
        <h2 className="display-5 fw-bold mb-5">Our Services</h2>
        <div className="row">
          {services.map((s, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div
                className="flip-card"
                onClick={() => setSelected(s)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front d-flex flex-column justify-content-center align-items-center p-4">
                    <i className={`bi ${s.icon} display-4 mb-3 text-gradient`}></i>
                    <h5 className="fw-bold">{s.title}</h5>
                  </div>
                  <div className="flip-card-back p-3">
                    <p>{s.desc}</p>
                    <div className="text-white small mt-3">
                      <strong>Tools:</strong>
                      <ul className="list-unstyled mt-1">
                        {s.tools.map((tool, idx) => (
                          <li key={idx}>• {tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="modal show fade d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content text-start">
                <div className="modal-header">
                  <h5 className="modal-title">{selected.title}</h5>
                  <button type="button" className="btn-close" onClick={() => setSelected(null)}></button>
                </div>
                <div className="modal-body">
                  <p>{selected.desc}</p>
                  <p><strong>Tools:</strong> {selected.tools.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
