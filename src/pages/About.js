import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/about.css';

const About = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <div className="container">
        <section className="about-header">
          <h1>About SmokeCity Music</h1>
          <p className="tagline">Feel the Beat. Live the Music.</p>
        </section>

        <section className="about-content">
          <h2>Our Story</h2>
          <p>
            SmokeCity Music has been built to help rising stars from allover the world who are 
            incapable to bring there sound out to the world due to circumstances.
          </p>

          <h2>What We Do</h2>
          <p>
            We offer a seamless space to stream music, discover emerging talent, and connect with music lovers from around the world. From indie artists to seasoned producers, SmokeCity is where creativity meets community.
          </p>

          <h2>Why It Matters</h2>
          <p>
            Music is more than sound—it's culture, emotion, and connection. We believe every artist deserves to be heard, and every listener deserves access to music that moves them.
          </p>
        </section>

        <section className="about-footer">
          <h2>Join the Vibe</h2>
          <p>
            Follow us on social media, share your favorite tracks, and help grow a community where music thrives.
          </p>
          <p>
            🎧 Instagram: <a href="#">@SmokeCity</a><br />
            📧 Contact: <a href="mailto:support@SmokeCity.com">support@SmokeCity.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
