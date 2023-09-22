import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBriefcase, faEnvelope, faWrench } from '@fortawesome/free-solid-svg-icons';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="contact" smooth={true} duration={500}>
            <div className="nav-link-border">
              <span className="popup-text">Contact</span>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="projects" smooth={true} duration={500}>
            <div className="nav-link-border">
              <span className="popup-text">Projects</span>
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="skills" smooth={true} duration={500}>
            <div className="nav-link-border">
              <span className="popup-text">Skills</span>
              <FontAwesomeIcon icon={faWrench} />
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" smooth={true} duration={500}>
            <div className="nav-link-border">
              <span className="popup-text">About</span>
              <FontAwesomeIcon icon={faUser} />
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="home" smooth={true} duration={500}>
            <div className="nav-link-border">
              <span className="popup-text">Home</span>
              <FontAwesomeIcon icon={faHouse} />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
