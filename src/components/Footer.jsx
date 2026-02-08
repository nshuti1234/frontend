// Footer Component - Shows footer with links and information

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Unser website</h3>
          <p>A modern web application built with React, Node.js, and MongoDB. Experience secure authentication and powerful features.</p>
          <div className="social-links">
            <a href="#" aria-label="GitHub">📦</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/items">Items</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li>User Authentication</li>
            <li>Role-Based Access</li>
            <li>Protected Routes</li>
            <li>CRUD Operations</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>📧 nshuti4patrick.com</li>
            <li>📞 0176 20144705</li>
            <li>📍 schanzer weg</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AppFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

