import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const email = 'pbeckmann94@gmail.com';

  return (
    <div className="container2">
      <h2>Contact Me</h2>
      <div className="card4">
        <form>
          <div className="form-group">
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="subject"></label>
            <input type="text" id="subject" name="subject" placeholder="Subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message"></label>
            <input type="text" id="message" name="subject" placeholder="Message" />
          </div>
          <button type="submit">Send message</button>
        </form>
        <p>Phone: +47 913 77 620</p>
      </div>
    </div>
  );
};

export default Contact;
