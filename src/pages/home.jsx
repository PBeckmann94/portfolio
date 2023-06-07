import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const email = 'pbeckmann94@gmail.com';

  return (
    <div className="container">
      <div className="card">
        <div className="description">
          <h1>Hi there!</h1>
          <p>
            I'm Patrick Beckmann, a passionate web developer with a knack for creating dynamic and
            user-friendly web applications. With a strong foundation in front-end development technologies like
            React and JavaScript, I love turning ideas into reality through clean and efficient code.
          </p>
          <a href="https://www.facebook.com/patrick.beckmann.31/" className="social-link">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://github.com/PBeckmann94" className="social-link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/patrick-beckmann-127322155/" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={`mailto:${email}`} className="social-link">
          <FontAwesomeIcon icon={faEnvelope} />
      </a>
          </div>
        <div className="spacer" /> {/* Add an empty div for spacing */}
        <img className="profile-picture" src="IMG_20220621_180350 (2).jpg" alt="Profile" />
      </div>
    </div>
  );
};

export default Home;
