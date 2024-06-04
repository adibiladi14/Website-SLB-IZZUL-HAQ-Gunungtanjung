// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Import the CSS file
import logo from '../assets/logo.png'; // Ensure you have the logo image in the assets folder

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinksRef = useRef(null);

  const controlNavbar = () => {
    if (window.scrollY === 0) {
      setVisible(false); // At the top of the page
    } else if (window.scrollY > lastScrollY) {
      setVisible(false); // Scrolling down
    } else {
      setVisible(true); // Scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

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
    <nav className={`navbar ${visible ? 'navbar--visible' : 'navbar--hidden'}`}>
      <div className="navbar-content">
        <div className="navbar-logo-text">
          <img src={logo} alt="SLB Logo" className="navbar-logo" />
          <div className="navbar-text">
            <span>SLB IZZUL HAQ</span>
            <span>GUNUNGTANJUNG</span>
          </div>
        </div>
        <button className="navbar-toggle" onClick={toggleMobileMenu}>
          &#9776;
        </button>
        <ul ref={navLinksRef} className={`nav-links ${isMobileMenuOpen ? 'nav-links--open' : ''}`}>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/admin" onClick={() => setMobileMenuOpen(false)}>Admin</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
