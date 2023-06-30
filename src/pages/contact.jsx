import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Contact = () => {
  const email = 'pbeckmann94@gmail.com';
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display the popup
    setShowPopup(true);
  };

  return (
    <div className="container-contact">
      <h2>Contact Me</h2>
      <div className="card5">
        <form onSubmit={handleSubmit}>

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
            <textarea type="text" id="message" name="message" placeholder="Message"></textarea>
          </div>
          <button type="submit">Send message</button>
        </form>
        {showPopup && (
          <div className="popup">
            <p>The function is not yet implemented. Reach me on email or phone</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        )}
        <div className="contact-icons">
          <a href={`mailto:${email}`} className="contact-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          pbeckmann94@gmail.com
          <div className="contact-icon">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          +47 913 77 620
        </div>
      </div>
    </div>
  );
};

export default Contact;



