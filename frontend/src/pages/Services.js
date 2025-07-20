import React, { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import { servicesAPI } from '../utils/api';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await servicesAPI.getAll();
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const categories = [
    { value: 'all', label: 'All Services' },
    { value: '3d-construction', label: '3D Design & Construction' },
    { value: 'repair-maintenance', label: 'Repair & Maintenance' },
    { value: 'home-services', label: 'Home Services' }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Discover our comprehensive range of professional services designed to meet all your needs</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-filter">
            <h2>Filter by Category</h2>
            <div className="filter-buttons">
              {categories.map(category => (
                <button
                  key={category.value}
                  className={`filter-btn ${selectedCategory === category.value ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <p>Loading services...</p>
          ) : (
            <div className="services-grid">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          )}

          {!loading && filteredServices.length === 0 && (
            <p>No services found in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
