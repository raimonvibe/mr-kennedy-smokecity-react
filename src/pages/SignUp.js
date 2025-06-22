import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/signup.css';

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="display">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
      
      <div className="signup-container">
        <h2>Create Account</h2>
        <form action="https://formspree.io/f/xvgraqwk" method="POST">
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter password" required />
          </div>
          <button type="submit" className="submit-btn">Sign Up</button>
          <div className="signin-link">
            Already have an account? <Link to="/login">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
