import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <section className="section newsletter-section">
      <div className="container newsletter-container">
        <h2 className="newsletter-title">Newsletter</h2>
        <p className="newsletter-desc">
          Subscribe to Our Newsletter to get Important News, <br className="hide-mobile" />
          Amazing Offers & Inside Scoops.
        </p>
        
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input 
            type="email" 
            className="newsletter-input" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary beveled-btn newsletter-btn">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
