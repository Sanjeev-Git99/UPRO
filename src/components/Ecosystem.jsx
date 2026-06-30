import React from 'react';
import './Ecosystem.css';

const ecosystemItems = [
  {
    id: 1,
    title: 'Probinar',
    description: 'Explore the vast range of robust ecosystem that powers our network and discover limitless possibilities with decentralized network.',
  },
  {
    id: 2,
    title: 'Stake UPRO',
    description: 'Stake UPRO to earn high rewards and secure the network while enjoying exclusive access and governance rights within the ecosystem.',
  },
  {
    id: 3,
    title: 'UPRO Bazaar',
    description: 'Our decentralized marketplace where you can buy, sell, and trade unique digital assets securely within the Ultrapro ecosystem.',
  }
];

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="section ecosystem-section">
      <div className="container">
        <h2 className="section-title">Ecosystem</h2>
        
        <div className="grid-3 ecosystem-grid">
          {ecosystemItems.map(item => (
            <div key={item.id} className="eco-item">
              <h3 className="eco-title">{item.title}</h3>
              <p className="eco-desc">{item.description}</p>
              <a href="#" className="eco-link">Explore More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
