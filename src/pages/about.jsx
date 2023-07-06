import React, { useEffect} from 'react';
import '../App.css';
import applyScrollAnimation from '../javascript/scrollAnimation';

const About = () => {
  useEffect(() => {
    window.addEventListener('scroll', applyScrollAnimation);

    return () => {
      window.removeEventListener('scroll', applyScrollAnimation);
    };
  }, []);

    return (
        <div className="container-about">
            <div className="container-about-h2">
                <h2>About</h2>
            </div>
            <div className="card2">
                <div className="scroll-animation-hidden">
                <h2>Who I am</h2>
                <p>I'm a passionate web developer with a knack for creating dynamic and
                    user-friendly web applications. With a strong foundation in front-end development technologies like
                    React and JavaScript, I love turning ideas into reality through clean and efficient code.</p>
            </div>
            </div>
            <div className="card2">
            <div className="scroll-animation-hidden">
                <h2>What I Do</h2>
                <p> I focus on improving my front-end capabilities. I strive to enhance my skills in creating visually appealing and user-friendly interfaces. 
                    Outside of work, I enjoy gaming in my free time. Gaming provides me with a creative outlet and a means to unwind.</p>
            </div>
            </div>
        </div>
    );
};

export default About;
