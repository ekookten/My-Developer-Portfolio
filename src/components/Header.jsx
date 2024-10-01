import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">Portfolio</Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/projects" className="navbar-item">Projects</Link>
          <Link to="/contact" className="navbar-item">Contact</Link>
          <Link to="/resume" className="navbar-item">Resume</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
