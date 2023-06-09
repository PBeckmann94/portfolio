import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link, animateScroll as scroll } from 'react-scroll';



const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="contact" smooth={true} duration={500}>
            <div className="nav-link-border">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="projects" smooth={true} duration={500}>
            <div className="nav-link-border">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="about" smooth={true} duration={500}>
            <div className="nav-link-border">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="home" smooth={true} duration={500}>
            <div className="nav-link-border">
              <FontAwesomeIcon icon={faHouse} />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
