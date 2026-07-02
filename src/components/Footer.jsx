import React from 'react';
import './Footer.css'; // Importing the external stylesheet

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        <div className="footer-section brand-info">
          <h3>MyCompany</h3>
          <p>Building modern web experiences with clean, maintainable code.</p>
        </div>

        <div className="footer-section links-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section links-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} MyCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

// * footer
// * logo , copy right , 

// * Header 
// * left -> logo 
// * middle -> home , about us and contact us 
// * right -> login and signup 