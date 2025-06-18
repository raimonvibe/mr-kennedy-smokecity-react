import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div>
      <div className="display">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
      
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form action="https://formspree.io/f/mzzgrrpo" method="post" className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
