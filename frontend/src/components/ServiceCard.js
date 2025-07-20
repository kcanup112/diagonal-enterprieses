import React from 'react';

const ServiceCard = ({ service, index, onClick }) => {
  const getIcon = (category) => {
    switch (category) {
      case '3d-construction':
        return '🏗️';
      case 'repair-maintenance':
        return '🔧';
      case 'home-services':
        return '🏠';
      default:
        return '⚙️';
    }
  };

  return (
    <div 
      className="service-card" 
      onClick={onClick}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      <div className="service-card-icon">
        {getIcon(service.category)}
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {service.features && (
        <div className="service-features">
          <ul>
            {service.features.slice(0, 3).map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      {service.price && (
        <div className="service-price">
          <span>Starting from ${service.price.toLocaleString()}</span>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
