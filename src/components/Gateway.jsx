import React from 'react';
import './Gateway.css';

const Gateway = () => {
  return (
    <section id="gateway" className="section gateway-section">
      <div className="container">
        <div className="gateway-layout grid-2">
          
          <div className="gateway-visual">
            <div className="gateway-img-wrapper">
              {/* User will provide this laptop illustration image later or place it in public folder */}
              <img 
                src="https://res.cloudinary.com/dvbuzxcwn/image/upload/v1782817715/Arwork_2_1_zolkyc.png" 
                alt="Gateway to Financial Freedom" 
                className="gateway-img" 
              />
            </div>
          </div>
          
          <div className="gateway-content">
            <h2 className="gateway-title">
              Your Gateway to <br/>
              Unrestricted <br/>
              Financial Freedom
            </h2>
            
            <p className="gateway-desc">
              At Ultrapro, our belief is simple yet profound: everyone deserves the freedom to earn, hold, spend, share, and give their money—regardless of their background or origin. We're not just a cryptocurrency platform; we're the epitome of trust, providing you with a seamless journey towards unrestricted financial empowerment.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Gateway;
