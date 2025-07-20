import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Modern House Design',
      image: '/images/gallery/house1.jpg',
      category: '3D Construction'
    },
    {
      id: 2,
      title: 'Kitchen Renovation',
      image: '/images/gallery/kitchen1.jpg',
      category: 'Repair & Maintenance'
    },
    {
      id: 3,
      title: 'Smart Home Setup',
      image: '/images/gallery/smart-home1.jpg',
      category: 'Home Services'
    },
    {
      id: 4,
      title: 'Commercial Building',
      image: '/images/gallery/commercial1.jpg',
      category: '3D Construction'
    },
    {
      id: 5,
      title: 'Bathroom Remodel',
      image: '/images/gallery/bathroom1.jpg',
      category: 'Repair & Maintenance'
    },
    {
      id: 6,
      title: 'Garden Landscaping',
      image: '/images/gallery/garden1.jpg',
      category: 'Home Services'
    }
  ];

  return (
    <section className="gallery">
      <div className="container">
        <h2>Our Work Gallery</h2>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <img 
                src={item.image} 
                alt={item.title}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(item.title);
                }}
              />
              <div className="gallery-overlay">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
