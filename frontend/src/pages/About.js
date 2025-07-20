import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Diagonal Enterprises</h1>
          <p>Your trusted partner in construction, maintenance, and home services since 2020</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-sections">
            <div className="about-section">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, Diagonal Enterprises has quickly become a leading provider of 
                comprehensive construction and home services. Our journey began with a simple 
                vision: to transform spaces and improve lives through innovative design, quality 
                construction, and reliable service.
              </p>
              <p>
                What started as a small team of passionate builders has grown into a full-service 
                company offering everything from 3D architectural design to complete home maintenance. 
                We believe that every space has the potential to be extraordinary, and we're here 
                to make that vision a reality.
              </p>
            </div>

            <div className="about-section">
              <h2>Our Mission</h2>
              <p>
                To provide exceptional construction, maintenance, and home services that exceed 
                our clients' expectations. We are committed to quality, innovation, and customer 
                satisfaction in every project we undertake.
              </p>
            </div>

            <div className="about-section">
              <h2>Our Values</h2>
              <div className="values-grid">
                <div className="value-item">
                  <h3>🎯 Excellence</h3>
                  <p>We strive for perfection in every project, no matter how big or small.</p>
                </div>
                <div className="value-item">
                  <h3>🤝 Integrity</h3>
                  <p>We conduct business with honesty, transparency, and ethical practices.</p>
                </div>
                <div className="value-item">
                  <h3>💡 Innovation</h3>
                  <p>We embrace new technologies and methods to deliver better results.</p>
                </div>
                <div className="value-item">
                  <h3>👥 Teamwork</h3>
                  <p>We work collaboratively with our clients and partners to achieve success.</p>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2>Why Choose Us?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <h3>🏆 Experience</h3>
                  <p>Over 4 years of experience in the construction and home services industry.</p>
                </div>
                <div className="feature-item">
                  <h3>🛠️ Comprehensive Services</h3>
                  <p>From design to construction to maintenance, we handle it all.</p>
                </div>
                <div className="feature-item">
                  <h3>💰 Competitive Pricing</h3>
                  <p>Quality services at affordable prices with transparent pricing.</p>
                </div>
                <div className="feature-item">
                  <h3>⏰ Timely Delivery</h3>
                  <p>We respect your time and deliver projects on schedule.</p>
                </div>
                <div className="feature-item">
                  <h3>🔧 Quality Workmanship</h3>
                  <p>We use only the best materials and skilled professionals.</p>
                </div>
                <div className="feature-item">
                  <h3>📞 24/7 Support</h3>
                  <p>Our customer support team is always available to help.</p>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2>Our Team</h2>
              <p>
                Our diverse team of architects, engineers, contractors, and service professionals 
                brings together decades of combined experience. We are united by our commitment 
                to excellence and our passion for creating spaces that our clients love.
              </p>
              <p>
                Every team member is carefully selected for their expertise, professionalism, 
                and dedication to customer satisfaction. We invest in continuous training and 
                development to ensure our team stays at the forefront of industry trends and 
                best practices.
              </p>
            </div>

            <div className="about-section">
              <h2>Get Started Today</h2>
              <p>
                Ready to transform your space? Contact us today for a free consultation. 
                Let's discuss your project and discover how Diagonal Enterprises can 
                bring your vision to life.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="cta-button">Contact Us</a>
                <a href="/services" className="cta-button-secondary">View Services</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
