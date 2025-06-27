import React, { useState } from 'react';
import '../styles/animations.css';
import './BlogPreview.css';

const blogs = [
  {
    title: "5 Web Trends in 2025",
    desc: "Discover upcoming technologies shaping the web.",
    img: "https://img.freepik.com/premium-vector/cartoon-man-with-glasses-beard_481747-101434.jpg",
    author: "Rahul Mehta",
    date: "June 20, 2025",
    content: "This is a detailed article about upcoming web trends like AI, WebAssembly, Serverless, etc."
  },
  {
    title: "Why UI/UX Matters",
    desc: "Better design = better business results.",
    img: "https://img.freepik.com/premium-psd/smiling-3d-cartoon-man-avatar_975163-755.jpg",
    author: "Sneha Kapoor",
    date: "June 10, 2025",
    content: "In this post, we dive into why UI/UX drives conversions and how to approach good design."
  },
  {
    title: "Choosing the Right Stack",
    desc: "React? Vue? Angular? What fits best?",
    img: "https://img.freepik.com/free-vector/young-man-with-glasses-illustration_1308-174706.jpg",
    author: "Aditya Sharma",
    date: "May 28, 2025",
    content: "Every project has a perfect stack. Here's how to choose based on speed, budget, and scale."
  }
];

const BlogPreview = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section className="blog-section text-white text-center py-5 animate__animated animate__fadeInUp">
      <div className="container">
        <h2 className="display-5 fw-bold mb-5">From Our Blog</h2>
        <div className="row">
          {blogs.map((blog, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div
                className="blog-card card h-100 border-0"
                onClick={() => setSelectedBlog(blog)}
                style={{ cursor: 'pointer' }}
              >
               <img src={blog.img} className="blog-img" alt="blog" />
                <div className="card-body bg-light text-dark rounded-bottom">
                  <h5 className="card-title fw-bold">{blog.title}</h5>
                  <p className="card-text">{blog.desc}</p>
                  <small className="text-muted d-block mb-2">
                    By {blog.author} on {blog.date}
                  </small>
                  <button className="btn btn-outline-primary btn-sm">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedBlog && selectedBlog.img && (
          <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedBlog.title}</h5>
                  <button type="button" className="btn-close" onClick={() => setSelectedBlog(null)}></button>
                </div>
                <div className="modal-body">
                  <img src={selectedBlog.img} className="blog-img-modal" alt="blog" />
                  <p className="text-muted mb-1">
                    <strong>Author:</strong> {selectedBlog.author}
                  </p>
                  <p className="text-muted">
                    <strong>Date:</strong> {selectedBlog.date}
                  </p>
                  <p>{selectedBlog.content}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPreview;
