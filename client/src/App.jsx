import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import Services from './pages/Services';
import TechStack from './pages/TechStack';
import Testimonials from './pages/Testimonials';
import BlogPreview from './pages/BlogPreview';
import Contact from './pages/Contact';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';


const App = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <>
              <Hero />
              <About />
              <Services />
              <TechStack />
              <Testimonials />
              <BlogPreview />
              <Contact />
              <Footer />
            </>
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
