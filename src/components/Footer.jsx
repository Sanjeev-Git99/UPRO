import React, { useState } from 'react';
import { FaTwitter, FaTelegram, FaDiscord, FaRedditAlien, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if(email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        
        <h2 className="footer-title">UPRO</h2>
        
        <p className="footer-desc">
          The Ultrapro is all about community. It's made up of people from all different <br className="hide-mobile" /> backgrounds and interests.
        </p>
        
        <p className="footer-address">
          <strong>Address :</strong> IFZA Dubai Silicon Oasis, Dubai, United Arab Emirates
        </p>
        
        <div className="social-links-row">
          <a href="#"><FaTwitter /></a>
          <a href="#" className="social-bird-icon">
            <img src="https://res.cloudinary.com/dvbuzxcwn/image/upload/v1782794938/Group_1261152727_xqjhle.png" alt="bird" style={{width: '60px', height: '60px', objectFit: 'contain', margin: '0 -15px'}} />
          </a>
          <a href="#"><FaDiscord /></a>
          <a href="#"><FaRedditAlien /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
        
        <div className="footer-newsletter">
          <h3 className="newsletter-title">Newsletter</h3>
          <p className="newsletter-desc">
            Subscribe to Our Newsletter to get Important News,<br className="hide-mobile" />
            Amazing Offers & Inside Scoops.
          </p>
          
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary beveled-btn newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
