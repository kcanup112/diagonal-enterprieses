import React, { useState, useEffect } from 'react';
import { servicesAPI } from '../utils/api';

const Residential3D = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await servicesAPI.getAll();
      // Filter for 3D construction services
      const constructionServices = response.data.filter(service => 
        service.category === '3d-construction'
      );
      setServices(constructionServices);
    } catch (error) {
      console.error('Error fetching services:', error);
      // Fallback 3D construction services
      setServices([
        {
          id: 1,
          title: 'Residential 3D Design & Visualization',
          description: 'Transform your dream home into reality with our cutting-edge 3D design and visualization services.',
          category: '3d-construction',
          price: 150000,
          features: ['3D Modeling', 'Architectural Design', 'Virtual Reality Tours', 'Material Selection', 'Lighting Design']
        },
        {
          id: 2,
          title: 'Modern Villa Construction',
          description: 'Contemporary villa construction with smart home integration and sustainable building practices.',
          category: '3d-construction',
          price: 2500000,
          features: ['Smart Home Integration', 'Sustainable Materials', 'Energy Efficient Design', 'Luxury Finishes']
        },
        {
          id: 3,
          title: 'Apartment Complex Development',
          description: 'Multi-unit residential complexes with modern amenities and efficient space utilization.',
          category: '3d-construction',
          price: 5000000,
          features: ['Multi-Unit Planning', 'Common Area Design', 'Parking Solutions', 'Landscape Architecture']
        },
        {
          id: 4,
          title: 'Home Renovation & Remodeling',
          description: 'Complete home transformation with 3D planning and modern construction techniques.',
          category: '3d-construction',
          price: 500000,
          features: ['3D Before/After Visualization', 'Structural Modifications', 'Interior Design', 'Timeline Management']
        },
        {
          id: 5,
          title: 'Custom Architecture Design',
          description: 'Bespoke architectural solutions tailored to your lifestyle and preferences.',
          category: '3d-construction',
          price: 300000,
          features: ['Custom Floor Plans', 'Architectural Drawings', 'Building Permits', 'Construction Supervision']
        },
        {
          id: 6,
          title: 'Eco-Friendly Construction',
          description: 'Sustainable building practices with green materials and energy-efficient designs.',
          category: '3d-construction',
          price: 1800000,
          features: ['Green Building Materials', 'Solar Integration', 'Water Conservation', 'Energy Efficiency']
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const galleryImages = [
    {
      id: 1,
      title: 'Modern Villa Design',
      description: 'Contemporary 3-story villa with glass facades'
    },
    {
      id: 2,
      title: 'Luxury Residence',
      description: 'High-end residential construction'
    },
    {
      id: 3,
      title: 'Architectural Excellence',
      description: 'Award-winning residential design'
    },
    {
      id: 4,
      title: 'Smart Home Integration',
      description: 'Technology-enabled living spaces'
    },
    {
      id: 5,
      title: 'Sustainable Living',
      description: 'Eco-friendly construction solutions'
    },
    {
      id: 6,
      title: 'Urban Development',
      description: 'Modern residential complexes'
    }
  ];

  const processes = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Understanding your vision, requirements, and budget through detailed discussions.',
      icon: '💭'
    },
    {
      step: '02',
      title: '3D Design & Modeling',
      description: 'Creating detailed 3D models and architectural plans with photorealistic renderings.',
      icon: '🏗️'
    },
    {
      step: '03',
      title: 'Planning & Permits',
      description: 'Handling all regulatory approvals, permits, and technical documentation.',
      icon: '📋'
    },
    {
      step: '04',
      title: 'Construction Phase',
      description: 'Professional construction with regular updates and quality control measures.',
      icon: '🔨'
    },
    {
      step: '05',
      title: 'Final Handover',
      description: 'Project completion with final inspections and seamless handover to clients.',
      icon: '🏡'
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="residential-3d-page">
      {/* Futuristic Hero Section */}
      <section className="residential-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-particles"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-main">From Trace to Terraces</span>
                <span className="title-sub">Hassle-Free Design</span>
              </h1>
              <p className="hero-description">
                Transform your architectural dreams into stunning reality with our cutting-edge 3D design and construction services. 
                We blend innovation with precision to create spaces that inspire.
              </p>
              <div className="hero-buttons">
                <button className="cta-button primary">Start Your Project</button>
                <button className="cta-button secondary">View Portfolio</button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-elements">
                <div className="element-1"></div>
                <div className="element-2"></div>
                <div className="element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Design Process</h2>
          <p className="section-subtitle">From concept to completion, we ensure every detail is perfect</p>
          
          <div className="process-timeline">
            {processes.map((process, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{process.step}</div>
                <div className="step-icon">{process.icon}</div>
                <div className="step-content">
                  <h3>{process.title}</h3>
                  <p>{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our 3D Construction Services</h2>
          
          <div className="services-filter">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Services
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'residential' ? 'active' : ''}`}
              onClick={() => setActiveFilter('residential')}
            >
              Residential
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveFilter('commercial')}
            >
              Commercial
            </button>
          </div>

          <div className="services-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <h3>{service.title}</h3>
                  <div className="service-price">₹{service.price.toLocaleString()}</div>
                </div>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <h4>Features:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="service-btn">Get Quote</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">Explore our exceptional 3D construction projects</p>
          
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <div className="gallery-placeholder">
                  <div className="placeholder-icon">🏗️</div>
                  <div className="placeholder-text">3D Design</div>
                </div>
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Your Dream Home?</h2>
            <p>Let's transform your vision into reality with our expert 3D design and construction services.</p>
            <div className="cta-buttons">
              <button className="cta-button primary">Start Your Project</button>
              <button className="cta-button secondary">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Residential3D;
