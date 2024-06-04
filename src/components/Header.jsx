// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const images = [image1, image2, image3];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navLinksRef.current && !navLinksRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="header" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      <nav className="header-nav">
        <div className="header-logo-text">
          <img src={logo} alt="SLB Logo" className="header-logo" />
          <div className="header-text">
            <span>SLB IZZUL HAQ</span>
            <span>GUNUNGTANJUNG</span>
          </div>
        </div>
        <button className="header-toggle" onClick={toggleMobileMenu}>
          &#9776;
        </button>
        <ul ref={navLinksRef} className={`header-links ${isMobileMenuOpen ? 'header-links--open' : ''}`}>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/admin" onClick={() => setMobileMenuOpen(false)}>Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
