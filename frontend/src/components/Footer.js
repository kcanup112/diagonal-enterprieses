import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Diagonal Enterprises</h3>
            <p>Your premier partner for construction, maintenance, and home services. We transform spaces with innovative solutions and reliable service.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Our Services</h3>
            <p><a href="#services">3D Design & Construction</a></p>
            <p><a href="#services">Repair & Maintenance</a></p>
            <p><a href="#services">Home Services</a></p>
            <p><a href="#services">Commercial Projects</a></p>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📍 123 Business Street, City, State 12345</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉️ info@diagonalenterprises.com</p>
            <p>🕒 Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <p><a href="/">Home</a></p>
            <p><a href="/services">Services</a></p>
            <p><a href="/about">About Us</a></p>
            <p><a href="/contact">Contact</a></p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Diagonal Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
