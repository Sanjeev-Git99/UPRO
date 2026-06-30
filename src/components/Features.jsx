import React from 'react';
import './Features.css';

const customIcon = <img src="https://res.cloudinary.com/dvbuzxcwn/image/upload/v1782818147/Vector_ylgacp.png" alt="Feature Icon" className="feature-custom-icon" />;

const featuresData = [
  {
    id: 1,
    icon: customIcon,
    title: 'Vision',
    description: 'We believe that everyone deserves equal access to financial services, and that decentralized technology is the key to unlocking this potential.'
  },
  {
    id: 2,
    icon: customIcon,
    title: 'Mission',
    description: 'Our mission is to provide an intuitive and high-performance blockchain ecosystem that seamlessly integrates traditional finance with cutting-edge crypto solutions.'
  },
  {
    id: 3,
    icon: customIcon,
    title: 'Values',
    description: 'We prioritize transparency, user-centric innovation, and unbreakable security in every product and service we develop for our community.'
  },
  {
    id: 4,
    icon: customIcon,
    title: 'Security',
    description: 'State-of-the-art cryptographic protocols and multi-layered defense mechanisms ensure your digital assets remain absolutely protected at all times.'
  }
];

const Features = () => {
  return (
    <section id="features" className="section features-section">
      <div className="container">
        
        <div className="grid-4 features-grid">
          {featuresData.map(feature => (
            <div key={feature.id} className="feature-card beveled-card">
              <div className="feature-icon-right">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
