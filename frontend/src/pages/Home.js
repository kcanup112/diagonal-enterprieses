import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Feedback from '../components/Feedback';
import { servicesAPI } from '../utils/api';

const Home = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    fetchServices();
  }, []);

  const handleServiceClick = (service) => {
    if (service.category === '3d-construction' && service.id === 1) {
      // Navigate to Residential 3D page for the main residential service
      history.push('/residential-3d');
    } else if (service.category === 'repair-maintenance' && service.id === 2) {
      // Navigate to Repair & Maintenance page
      history.push('/repair-maintenance');
    } else {
      // For other services, you can add different navigation logic here
      console.log('Service clicked:', service.title);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await servicesAPI.getAll();
      // Get first 4 services for home page
      setServices(response.data.slice(0, 4));
    } catch (error) {
      console.error('Error fetching services:', error);
      // Fallback services if API fails
      setServices([
        {
          id: 1,
          title: 'Residential 3D Design & Construction',
          description: 'Complete residential design and construction services with 3D modeling and visualization.',
          category: '3d-construction',
          price: 150000,
          features: ['3D Modeling', 'Architectural Design', 'Construction Management']
        },
        {
          id: 2,
          title: 'Repair & Maintenance Services',
          description: 'Professional repair and maintenance services for residential and commercial properties.',
          category: 'repair-maintenance',
          price: 5000,
          features: ['Plumbing Repair', 'Electrical Work', 'HVAC Maintenance']
        },
        {
          id: 3,
          title: 'Complete Home Services',
          description: 'Comprehensive home services including cleaning, gardening, and security systems.',
          category: 'home-services',
          price: 2500,
          features: ['House Cleaning', 'Gardening', 'Security Systems']
        },
        {
          id: 4,
          title: 'Commercial Construction',
          description: 'Professional commercial construction services for offices and retail spaces.',
          category: '3d-construction',
          price: 500000,
          features: ['Commercial Design', 'Project Management', 'Quality Control']
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <Hero />
      
      <section className="services" id="services">
        <div className="container">
          <h2>Our Services</h2>
          {loading ? (
            <p>Loading services...</p>
          ) : (
            <div className="services-grid">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onClick={() => handleServiceClick(service)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Gallery />
      <Contact />
      <Feedback />
    </div>
  );
};

export default Home;
