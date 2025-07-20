import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            Diagonal Enterprises
          </Link>
          
          <button className="nav-toggle" onClick={toggleMenu}>
            ☰
          </button>
          
          <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/residential-3d">3D Design</Link></li>
            <li><Link to="/repair-maintenance">Repair & Maintenance</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
