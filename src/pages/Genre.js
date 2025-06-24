import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/genre.css';

const Genre = () => {
  return (
    <div style={{backgroundColor: '#000000', minHeight: '100vh'}}>
      <div className="display">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>

      <section className="genres-section">
        <h1>Explore Music Genres</h1>
        <div className="genres-container">
          <div className="genre-card">Afrobeat</div>
          <div className="genre-card">Hip Hop</div>
          <div className="genre-card">Pop</div>
          <div className="genre-card">R&amp;B</div>
          <div className="genre-card">Dancehall</div>
          <div className="genre-card">Reggae</div>
          <div className="genre-card">Amapiano</div>
          <div className="genre-card">Jazz</div>
          <div className="genre-card">Electronic</div>
        </div>
      </section>
    </div>
  );
};

export default Genre;
