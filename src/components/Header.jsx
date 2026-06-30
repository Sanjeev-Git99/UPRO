import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        <a href="#home" className="logo-container">
          <img src="https://res.cloudinary.com/dvbuzxcwn/image/upload/v1782794938/Group_1261152727_xqjhle.png" alt="UPRO Logo" className="logo-img" />
        </a>
        
        <nav className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#gateway">Gateway</a>
          <a href="#features">Features</a>
          <a href="#solutions">Solutions</a>
          <a href="#ecosystem">Ecosystem</a>
        </nav>
        
        <div className="nav-actions">
          <a href="#contact" className="btn-primary beveled-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Contact Us
          </a>
        </div>

        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMobileMenu}>Home</a>
        <a href="#gateway" onClick={closeMobileMenu}>Gateway</a>
        <a href="#features" onClick={closeMobileMenu}>Features</a>
        <a href="#solutions" onClick={closeMobileMenu}>Solutions</a>
        <a href="#ecosystem" onClick={closeMobileMenu}>Ecosystem</a>
        <a href="#contact" className="mobile-contact-btn" onClick={closeMobileMenu}>Contact Us</a>
      </div>
    </header>
  );
};

export default Header;
