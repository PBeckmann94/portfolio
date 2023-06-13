import React from 'react';
import '../App.css';

const Projects = () => {
  return (
    <div className="container-projects">
      <div className="container-projects-h2">
      <h2>Projects</h2>
      </div>
      <div className="card4">
        <div className="project-img-card">
          <img className="project-img" src="StyrLogo.png" alt="Profile" />
          <div className="card-text">
            <h1>Styr</h1>
            <p>Styr is a web application designed to simplify the management and organization of documents, drawings, and other visual assets. It provides users with an intuitive and efficient way to create and maintain an overview of their files and collaborate with others.</p>
            <p2>Tech Used: Ruby on Rails, Tailwind CSS, JavaScript, PostgreSQL, Leaflet, OpenStreetMap</p2>
            <div className="card-links">
              <a href="https://styr.rubynor.com" target="_blank" rel="noopener noreferrer">Link to Website</a>
              <a href="">More Information</a>
            </div>
          </div>
        </div>
      </div>
      <div className="card4">
      <div className="project-img-card">
          <img className="project-img" src="byttalogo.png" alt="Profile" />
          <div className="card-text">
            <h1>Bytta</h1>
            <p>Inspired by the concept of Finn.no, Bytta offers a platform where users can trade items without the need for monetary transactions. It provides a convenient and sustainable way for people to exchange things they no longer need or want, while also discovering new items that might be of interest to them.</p>
            <p2>Tech Used: React, Chakra UI, Firebase</p2>
            <div className="card-links">
              <a href="https://github.com/PBeckmann94/Bytta" target="_black" rel="noopener norefferer">Source Code</a>
            </div>
          </div>
        </div>
      </div>
      <div className="card4">
      <div className="project-img-card">
          <img className="project-img" src="logo512.png" alt="Profile" />
          <div className="card-text">
            <h1>React Messenger</h1>
            <p>React Messenger App is a real-time messaging application built using the React framework. It provides users with a platform to communicate and exchange messages with other users in a convenient and interactive way.</p>
            <p2>Tech Used: React, Scss, Firebase</p2>
            <div className="card-links">
              <a href="https://github.com/PBeckmann94/React-messaging" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
