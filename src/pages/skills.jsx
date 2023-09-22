import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCode, faCodeBranch, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';



const Skills = () => {
  return (
    <div className="container-skills">
      <div className="container-skills-h2">
      <h2>Skills</h2>
      </div>
      <div className="card3">
        <h2>
        <FontAwesomeIcon icon={faCode} /> Front-End</h2>
        <p>HTML</p>
        <p>CSS/SCSS</p>
        <p>React</p>
        <p>JavaScript</p>
        <p>Rails</p>
        <p>Tailwind CSS</p>
      </div>
      <div className="card3">
        <h2>
        <FontAwesomeIcon icon={faCodeBranch} /> Back-End</h2>
        <p>Ruby</p>
        <p>NodeJS</p>
        <p>MongoDB</p>
        <p>Firebase</p>
        <p>PostgreSQL</p>
        <p>MySQL</p>
      </div>
      <div className="card3">
        <h2>
        <FontAwesomeIcon icon={faScrewdriverWrench} /> Other</h2>
        <p>Github</p>
        <p>Wordpress</p>
        <p>VS Code</p>
        <p>Scrum</p>
      </div>
    </div>
  );
};

export default Skills;
