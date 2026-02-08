// Navigation Component - Shows navigation bar with links

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
       <Link to="/" className="nav-logo">
  <img
    src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
    alt="FlowStack logo"
    className="logo-img"
  />
  <span className="logo-text">LUST UM</span>
</Link>

        <div className="nav-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/items" className="nav-link">
            Items
          </Link>

          {isAuthenticated ? (
            <>
              {user?.role === 'admin' && (
                <Link to="/admin" className="nav-link">
                  Admin
                </Link>
              )}
              <div className="nav-user">
                <span className="user-name">👤 {user?.username}</span>
                <span className={`user-role ${user?.role}`}>{user?.role}</span>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link nav-link-register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

