

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './Home.css';

const Home = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="home-page">
      
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            herzlich willkomen zu <span className="gradient-text">unser webApp</span>
          </h1>
          <p className="hero-subtitle">
            A modern, secure, and scalable web application built with React, Node.js, and MongoDB.
            Experience seamless authentication, role-based access control, and powerful features.
          </p>

          {isAuthenticated ? (
            <div className="welcome-message">
              <div className="welcome-card">
                <p className="welcome-text">Welcome back, <strong>{user?.username}</strong>! 👋</p>
                <p className="welcome-role">
                  You are logged in as: <span className={`role-badge ${user?.role}`}>{user?.role}</span>
                </p>
                <div className="welcome-actions">
                  <Link to="/items" className="cta-button primary">
                    View Items
                  </Link>
                  {user?.role === 'admin' && (
                    <Link to="/admin" className="cta-button secondary">
                      Admin Dashboard
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="hero-actions">
              <Link to="/register" className="cta-button primary">
                Get Started Free
              </Link>
              <Link to="/login" className="cta-button secondary">
                Login
              </Link>
            </div>
          )}
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">🚀</div>
          <div className="floating-card card-2">⚡</div>
          <div className="floating-card card-3">🔐</div>
        </div>
      </section>

      
      <section className="features-section">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to build and manage your application</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure Authentication</h3>
            <p>JWT-based authentication with password hashing. Your data is safe and secure.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>User Roles</h3>
            <p>Role-based access control with User and Admin roles. Manage permissions easily.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Protected Routes</h3>
            <p>Middleware protection for sensitive routes. Only authorized users can access.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>CRUD Operations</h3>
            <p>Full Create, Read, Update, and Delete functionality with MongoDB integration.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Responsive</h3>
            <p>Lightning-fast performance with modern React and optimized backend APIs.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful UI</h3>
            <p>Modern, responsive design that looks great on all devices and screen sizes.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Simple steps to get started</p>
        </div>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create Account</h3>
            <p>Register with your email and username to get started</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Login</h3>
            <p>Access your account with secure authentication</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Start Building</h3>
            <p>Create, manage, and organize your items with ease</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of users building amazing applications</p>
            <div className="cta-buttons">
              <Link to="/register" className="cta-button primary large">
                Create Free Account
              </Link>
              <Link to="/login" className="cta-button secondary large">
                Login to Existing Account
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
