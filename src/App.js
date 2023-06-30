import React from 'react';
import './App.css';
import { Link, Element } from 'react-scroll';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Skills from './pages/skills';
import About from './pages/about'
import Projects from './pages/projects';
import Contact from './pages/contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
