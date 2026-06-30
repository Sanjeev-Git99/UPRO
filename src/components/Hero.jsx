import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        
        <div className="hero-main grid-2">
          
          <div className="hero-content">
            <h1 className="hero-title">
              Pinnacle of Crypto <br/>
              Communities
            </h1>
            
            <p className="hero-description">
              Embark on a Financial Revolution with Ultrapro Blockchain. 
              Unleash the power of financial innovation and step into a 
              decentralized realm of boundless possibilities. Join the ranks of 
              millions worldwide who rely on Ultrapro Blockchain for its 
              unparalleled technology, expansive global footprint, and 
              unwavering commitment to pushing the boundaries of innovation.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary beveled-btn" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>Contact Us</a>
              <a href="#gateway" className="btn-outline beveled-btn-outline" style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>Learn More</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="illustration-wrapper">
              {/* The user will place the provided image as 'hero-illustration.png' in the public folder */}
              <img 
                src="https://res.cloudinary.com/dvbuzxcwn/image/upload/v1782794853/Arwork_1_flwc67.png" 
                alt="Crypto Community 3D Statue" 
                className="hero-statue-img"
              />
            </div>
          </div>
          
        </div>

        <div className="hero-stats-bottom">
          <div className="stat-item">
            <h3>20000+</h3>
            <p>Transactions / Sec</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>36+</h3>
            <p>Countries</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3>1M+</h3>
            <p>Trade per Day</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
