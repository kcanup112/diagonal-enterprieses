import React from 'react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>Diagonal Enterprises</h1>
        <p>Your Premier Partner for Construction, Maintenance, and Home Services</p>
        <p>Transforming spaces with innovative 3D design, reliable repairs, and comprehensive home solutions</p>
        <button className="cta-button" onClick={scrollToServices}>
          Explore Our Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
