import React, { useState, useEffect } from 'react';
import '../styles/index.css';

const RepairMaintenance = () => {
  const [activeTab, setActiveTab] = useState('residential');
  const [bookingType, setBookingType] = useState('consultation'); // 'consultation' or 'booking'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: 'residential',
    serviceNeeded: '',
    message: '',
    urgency: 'normal',
    // Booking specific fields
    preferredDate: '',
    preferredTime: '',
    serviceType: '',
    estimatedDuration: '1-2 hours',
    propertyAddress: '',
    accessInstructions: '',
    hasEmergencyAccess: false
  });

  useEffect(() => {
    // Add page-specific styles
    document.body.classList.add('repair-maintenance-page');
    return () => {
      document.body.classList.remove('repair-maintenance-page');
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleBookingTypeChange = (type) => {
    setBookingType(type);
  };

  const getMinDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getTime() + (90 * 24 * 60 * 60 * 1000)); // 90 days from now
    const year = maxDate.getFullYear();
    const month = String(maxDate.getMonth() + 1).padStart(2, '0');
    const day = String(maxDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const serviceOptions = [
    'Preventive Maintenance',
    'HVAC Service & Repair',
    'Plumbing Repair',
    'Electrical Maintenance',
    'Appliance Repair',
    'Emergency Repair',
    'Property Inspection',
    'Landscaping & Groundskeeping',
    'Painting & Touch-ups',
    'General Handyman Services',
    'Custom Maintenance Plan',
    'Other (Please specify in message)'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    console.log('Booking type:', bookingType);
    
    if (bookingType === 'consultation') {
      alert('Thank you! We will contact you within 2 hours for a free consultation.');
    } else {
      alert(`Thank you! Your service booking for ${formData.preferredDate} at ${formData.preferredTime} has been received. We will confirm your appointment within 1 hour.`);
    }
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: 'residential',
      serviceNeeded: '',
      message: '',
      urgency: 'normal',
      preferredDate: '',
      preferredTime: '',
      serviceType: '',
      estimatedDuration: '1-2 hours',
      propertyAddress: '',
      accessInstructions: '',
      hasEmergencyAccess: false
    });
  };

  const coreServices = [
    {
      icon: '🔧',
      title: 'Preventive Maintenance Programs',
      description: 'Scheduled inspections and maintenance to prevent costly breakdowns and extend equipment life.',
      features: ['Regular Inspections', 'Equipment Servicing', 'Performance Reports', 'Maintenance Scheduling']
    },
    {
      icon: '🚨',
      title: '24/7 Emergency Repairs',
      description: 'Round-the-clock emergency response for urgent repairs that can\'t wait.',
      features: ['24/7 Availability', 'Rapid Response', 'Emergency Hotline', 'Priority Service']
    },
    {
      icon: '🔌',
      title: 'Electrical Services',
      description: 'Complete electrical solutions from repairs to installations and safety inspections.',
      features: ['Wiring Repairs', 'Panel Upgrades', 'Safety Inspections', 'LED Conversions']
    },
    {
      icon: '🚿',
      title: 'Plumbing Services',
      description: 'Professional plumbing solutions for all residential and commercial needs.',
      features: ['Leak Repairs', 'Pipe Installations', 'Drain Cleaning', 'Water Heater Service']
    },
    {
      icon: '❄️',
      title: 'HVAC Services',
      description: 'Heating, ventilation, and air conditioning maintenance and repair services.',
      features: ['System Maintenance', 'Filter Replacements', 'Duct Cleaning', 'Energy Efficiency']
    },
    {
      icon: '🏗️',
      title: 'Structural Inspections',
      description: 'Comprehensive structural assessments to ensure building safety and integrity.',
      features: ['Foundation Checks', 'Roof Inspections', 'Safety Assessments', 'Compliance Reports']
    },
    {
      icon: '🧹',
      title: 'Janitorial Services',
      description: 'Professional cleaning and sanitation services for commercial and residential properties.',
      features: ['Deep Cleaning', 'Regular Maintenance', 'Sanitization', 'Eco-Friendly Options']
    },
    {
      icon: '🌱',
      title: 'Groundskeeping',
      description: 'Complete landscape and grounds maintenance for beautiful, well-maintained properties.',
      features: ['Lawn Care', 'Landscaping', 'Snow Removal', 'Irrigation Systems']
    }
  ];

  const benefits = [
    {
      icon: '✅',
      title: 'Reliability You Can Trust',
      description: 'Over 15 years of proven track record serving satisfied customers across residential and commercial sectors.'
    },
    {
      icon: '🛡️',
      title: 'Licensed & Insured Technicians',
      description: 'All our technicians are fully licensed, bonded, and insured for your peace of mind and protection.'
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprises. Get detailed estimates upfront with clear breakdown of all costs.'
    },
    {
      icon: '📋',
      title: 'Customized Maintenance Plans',
      description: 'Tailored maintenance programs designed specifically for your property type and unique requirements.'
    },
    {
      icon: '📱',
      title: 'Advanced Technology',
      description: 'We use cutting-edge diagnostic tools and digital reporting systems for efficient service delivery.'
    },
    {
      icon: '⚡',
      title: 'Rapid Response Time',
      description: 'Emergency calls answered within minutes, with technicians on-site typically within 2 hours.'
    }
  ];

  return (
    <div className="repair-maintenance">
      {/* Hero Section */}
      <section className="repair-hero">
        <div className="hero-background">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="company-name">Diagonal Repair & Maintenance</span>
                <span className="hero-subtitle">Professional Building Solutions You Can Trust</span>
              </h1>
              <p className="hero-description">
                Comprehensive repair and maintenance services for residential and commercial properties. 
                From emergency repairs to preventive maintenance programs, we keep your property in perfect condition.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Emergency Service</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Satisfied Clients</span>
                </div>
              </div>
              <div className="hero-cta">
                <a href="#consultation" className="cta-button primary">Book Service Now</a>
                <a href="#consultation" className="cta-button secondary">Free Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types Section */}
      <section className="property-types">
        <div className="container">
          <h2>We Serve All Property Types</h2>
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'residential' ? 'active' : ''}`}
              onClick={() => setActiveTab('residential')}
            >
              Residential Properties
            </button>
            <button 
              className={`tab ${activeTab === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveTab('commercial')}
            >
              Commercial Properties
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'residential' && (
              <div className="property-info">
                <div className="property-text">
                  <h3>Residential Services</h3>
                  <p>
                    Comprehensive maintenance solutions for homeowners, apartment complexes, and condominiums. 
                    We understand that your home is your most important investment, and we're committed to 
                    maintaining its value and ensuring your family's comfort and safety.
                  </p>
                  <ul className="property-features">
                    <li>Single-family homes</li>
                    <li>Apartment complexes</li>
                    <li>Condominiums</li>
                    <li>Townhouses</li>
                    <li>Senior living facilities</li>
                    <li>Student housing</li>
                  </ul>
                </div>
                <div className="property-image">
                  <div className="image-placeholder residential-image">
                    🏠 Residential Properties
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'commercial' && (
              <div className="property-info">
                <div className="property-text">
                  <h3>Commercial Services</h3>
                  <p>
                    Professional maintenance services for businesses, office buildings, retail spaces, and 
                    industrial facilities. We help you maintain a professional appearance, ensure employee 
                    safety, and minimize costly downtime through proactive maintenance strategies.
                  </p>
                  <ul className="property-features">
                    <li>Office buildings</li>
                    <li>Retail stores</li>
                    <li>Warehouses</li>
                    <li>Manufacturing facilities</li>
                    <li>Restaurants</li>
                    <li>Medical facilities</li>
                  </ul>
                </div>
                <div className="property-image">
                  <div className="image-placeholder commercial-image">
                    🏢 Commercial Properties
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="core-services" id="services">
        <div className="container">
          <h2>Our Core Services</h2>
          <p className="section-description">
            Comprehensive maintenance solutions designed to keep your property in optimal condition year-round.
          </p>
          <div className="services-grid">
            {coreServices.map((service, index) => (
              <div key={index} className="service-item" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <h2>Why Choose Diagonal Repair & Maintenance?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <div className="container">
          <h2>Our Simple Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-icon"></div>
              <h3>Contact Us</h3>
              <p>Call our 24/7 hotline or fill out our consultation form</p>
            </div>
            <div className="step">
              <div className="step-icon"></div>
              <h3>Free Assessment</h3>
              <p>We evaluate your property and provide a detailed maintenance plan</p>
            </div>
            <div className="step">
              <div className="step-icon"></div>
              <h3>Custom Solution</h3>
              <p>Receive a tailored maintenance program with transparent pricing</p>
            </div>
            <div className="step">
              <div className="step-icon"></div>
              <h3>Ongoing Service</h3>
              <p>Enjoy reliable, professional maintenance with regular updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation & Booking Section */}
      <section className="consultation" id="consultation">
        <div className="container">
          <div className="consultation-content">
            <div className="consultation-text">
              <h2>Schedule Your Service Today</h2>
              <p>
                Ready to experience the peace of mind that comes with professional property maintenance? 
                Choose between a free consultation or book a specific service directly.
              </p>
              
              {/* Service Selection Tabs */}
              <div className="booking-tabs">
                <button 
                  className={`booking-tab ${bookingType === 'consultation' ? 'active' : ''}`}
                  onClick={() => handleBookingTypeChange('consultation')}
                >
                  <span className="tab-icon">💬</span>
                  Free Consultation
                </button>
                <button 
                  className={`booking-tab ${bookingType === 'booking' ? 'active' : ''}`}
                  onClick={() => handleBookingTypeChange('booking')}
                >
                  <span className="tab-icon">📅</span>
                  Book Service
                </button>
              </div>
              
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>24/7 Emergency Hotline</strong>
                    <p>(555) 123-REPAIR</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <strong>Email Us</strong>
                    <p>service@diagonalrepair.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">⏰</span>
                  <div>
                    <strong>Response Time</strong>
                    <p>Emergency: Within 2 hours<br />Regular: Same day</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="consultation-form">
              <form onSubmit={handleSubmit}>
                <h3>
                  {bookingType === 'consultation' ? 'Request Free Consultation' : 'Book Your Service'}
                </h3>
                
                {/* Basic Information */}
                <div className="form-section">
                  <h4>Contact Information</h4>
                  <div className="form-row">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Property Information */}
                <div className="form-section">
                  <h4>Property Details</h4>
                  <div className="form-row">
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="residential">Residential Property</option>
                      <option value="commercial">Commercial Property</option>
                      <option value="both">Both Residential & Commercial</option>
                    </select>
                    {bookingType === 'booking' && (
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                      >
                        <option value="normal">Normal Priority</option>
                        <option value="urgent">Urgent</option>
                        <option value="emergency">Emergency</option>
                      </select>
                    )}
                  </div>
                  
                  {bookingType === 'booking' && (
                    <input
                      type="text"
                      name="propertyAddress"
                      placeholder="Property Address"
                      value={formData.propertyAddress}
                      onChange={handleInputChange}
                      required
                    />
                  )}
                </div>

                {/* Service Information */}
                <div className="form-section">
                  <h4>Service Details</h4>
                  {bookingType === 'booking' ? (
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Service Type</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      name="serviceNeeded"
                      placeholder="Type of Service Needed"
                      value={formData.serviceNeeded}
                      onChange={handleInputChange}
                    />
                  )}
                  
                  {bookingType === 'booking' && (
                    <select
                      name="estimatedDuration"
                      value={formData.estimatedDuration}
                      onChange={handleInputChange}
                    >
                      <option value="1-2 hours">1-2 hours</option>
                      <option value="2-4 hours">2-4 hours</option>
                      <option value="4-6 hours">4-6 hours</option>
                      <option value="half-day">Half day (6-8 hours)</option>
                      <option value="full-day">Full day (8+ hours)</option>
                      <option value="multi-day">Multiple days</option>
                    </select>
                  )}
                </div>

                {/* Scheduling (for bookings) */}
                {bookingType === 'booking' && (
                  <div className="form-section">
                    <h4>Preferred Schedule</h4>
                    <div className="form-row">
                      <div className="date-time-group">
                        <label>Preferred Date</label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          min={getMinDate()}
                          max={getMaxDate()}
                          required
                        />
                      </div>
                      <div className="date-time-group">
                        <label>Preferred Time</label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Time</option>
                          <option value="8:00 AM">8:00 AM</option>
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                          <option value="Emergency (ASAP)">Emergency (ASAP)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Additional Information */}
                <div className="form-section">
                  <h4>Additional Information</h4>
                  <textarea
                    name="message"
                    placeholder={bookingType === 'consultation' 
                      ? "Tell us about your maintenance needs..." 
                      : "Describe the issue or service requirements in detail..."
                    }
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                  ></textarea>
                  
                  {bookingType === 'booking' && (
                    <>
                      <input
                        type="text"
                        name="accessInstructions"
                        placeholder="Access instructions (gate codes, key location, etc.)"
                        value={formData.accessInstructions}
                        onChange={handleInputChange}
                      />
                      <div className="checkbox-group">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            name="hasEmergencyAccess"
                            checked={formData.hasEmergencyAccess}
                            onChange={handleInputChange}
                          />
                          <span className="checkmark"></span>
                          Property has 24/7 emergency access arrangements
                        </label>
                      </div>
                    </>
                  )}
                </div>

                <button type="submit" className="submit-button">
                  {bookingType === 'consultation' ? 'Get Free Consultation' : 'Book Service Now'}
                </button>
                
                {bookingType === 'booking' && (
                  <p className="booking-note">
                    <strong>Note:</strong> This is a booking request. We will confirm your appointment 
                    within 1 hour and send you a confirmation email with service details.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="final-cta">
        <div className="container">
          <h2>Don't Wait for Problems to Become Emergencies</h2>
          <p>
            Proactive maintenance saves money, prevents downtime, and extends the life of your property. 
            Join hundreds of satisfied customers who trust Diagonal Repair & Maintenance.
          </p>
          <div className="cta-buttons">
            <a href="tel:555-123-7372" className="cta-button emergency">
              Call Emergency Line: (555) 123-REPAIR
            </a>
            <a href="#consultation" className="cta-button primary">
              Book Service Online
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RepairMaintenance;
