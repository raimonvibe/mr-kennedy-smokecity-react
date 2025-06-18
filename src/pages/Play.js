import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/play.css';

const Play = () => {
  return (
    <div>
      <div className="display">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </div>
      
      <h1>Music Player</h1>
      <div className="music-container">
        <div className="music-info">
          <h4 id="title">SoundFusion</h4>
          <div className="progress-container">
            <div className="progress"></div>
          </div>
        </div>
        <audio id="audio">
          <source src="#" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

        <div className="img_container">
          <img 
            src="https://images.unsplash.com/photo-1485579149621-3123dd979885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljfGVufDB8fDB8fHww" 
            id="cover" 
            alt="Music Cover"
          />
        </div>
        <div className="navigation">
          <button id="prev" className="action-btn">
            <i className="fas fa-backward"></i>
          </button>
          
          <button id="play" className="action-btn action-btn-big">
            <i className="fas fa-play"></i>
          </button>

          <button id="next" className="action-btn">
            <i className="fas fa-forward"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Play;
