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
          <Link to="contact" className="nav-link" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faEnvelope} /></Link>
        </li>
        <li className="nav-item">
          <Link to="projects" className="nav-link" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faBriefcase} /></Link>
        </li>
        <li className="nav-item">
          <Link to="about" className="nav-link" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faUser} /></Link>
        </li>
        <li className="nav-item">
          <Link to="home" className="nav-link" smooth={true} duration={500}>
            <FontAwesomeIcon icon={faHouse} /></Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
